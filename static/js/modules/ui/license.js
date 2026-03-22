import { t } from '../i18n.js';
import { logger } from '../utils/logger.js';

export async function initLicense() {
    const status = await checkLicenseStatus();
    
    // Update global state
    state.license = {
        level: status.valid ? status.data.level : t('trial_community'),
        valid: status.valid,
        data: status.data || {}
    };

    updateLicenseUI(status);
}

export async function checkLicenseStatus() {
    try {
        const res = await fetch('/api/license/status');
        if (res.ok) {
            return await res.json();
        }
    } catch (err) {
        logger.error("Failed to check license status", err);
    }
    return { valid: false, hwid: 'N/A' };
}

export function updateLicenseUI(status) {
    const badge = document.querySelector('.logo-area span');
    if (badge) {
        if (status.valid) {
            badge.textContent = status.data.level.toUpperCase();
            badge.style.background = status.data.level === 'Enterprise' ? '#8b5cf6' : '#10b981';
        } else {
            badge.textContent = 'UNLICENSED';
            badge.style.background = '#ef4444';
        }
    }
}

export async function showLicenseModal() {
    const status = await checkLicenseStatus();
    const { showModal } = await import('./window.js');
    
    const content = `
        <div class="license-modal">
            <div class="info-group">
                <label>${t('machine_id')}</label>
                <div class="hwid-box">
                    <code>${status.hwid}</code>
                    <button class="copy-btn" onclick="navigator.clipboard.writeText('${status.hwid}')"><i class="fas fa-copy"></i></button>
                </div>
                <p class="hint">${t('hwid_copy_hint')}</p>
            </div>
            
            <div class="status-group">
                <label>${t('prop_status')}</label>
                <div class="status-card ${status.valid ? 'valid' : 'invalid'}">
                    <i class="fas ${status.valid ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>${status.valid ? `${status.data.level} Edition (${t('valid_until', { date: status.data.expiry })})` : t('status_invalid')}</span>
                </div>
            </div>

            <div class="activation-group">
                <label>${t('activate_license_title')}</label>
                <textarea id="license-key-input" placeholder="${t('license_key_placeholder')}"></textarea>
                <button id="activate-btn" class="primary-btn">${t('activate_license_btn')}</button>
            </div>
        </div>
    `;

    showModal({
        title: t('license_management'),
        content: content,
        width: "500px",
        onRender: (modalEl) => {
            const btn = modalEl.querySelector('#activate-btn');
            const input = modalEl.querySelector('#license-key-input');
            btn.onclick = async () => {
                const key = input.value.trim();
                if (!key) return;
                
                btn.disabled = true;
                btn.textContent = t('verifying');
                
                try {
                    const res = await fetch('/api/license/activate', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ key })
                    });
                    const result = await res.json();
                    if (result.success) {
                        alert(t('license_activated_success'));
                        location.reload();
                    } else {
                        alert(t('activation_failed') + result.message);
                    }
                } catch (err) {
                    alert(t('error_occurred') + err.message);
                } finally {
                    btn.disabled = false;
                    btn.textContent = t('activate_license_btn');
                }
            };
        }
    });
}
