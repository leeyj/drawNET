import { t } from '../../i18n.js';
import { checkLicenseStatus } from '../../ui/license.js';

export async function renderLicense(container) {
    const status = await checkLicenseStatus();
    container.innerHTML = `
        <h3><i class="fas fa-certificate" style="color: #3b82f6; margin-right: 8px;"></i> ${t('license_management')}</h3>
        <p class="settings-intro">${t('license_intro')}</p>
        
        <div class="license-status-card">
            <div class="status-header">
                <div class="edition-info">
                    <span class="edition-label">${t('current_edition')}</span>
                    <h2 class="edition-name">${status.valid ? status.data.level : t('trial_community')}</h2>
                </div>
                <div class="status-icon ${status.valid ? 'valid' : 'expired'}">
                    <i class="fas ${status.valid ? 'fa-crown' : 'fa-info-circle'}"></i>
                </div>
            </div>
            
            <div class="hwid-section">
                <div class="hwid-label-row">
                    <span>${t('machine_id')}</span>
                    <button class="text-link-btn" id="copy-hwid-btn"><i class="fas fa-copy"></i> ${t('copy')}</button>
                </div>
                <div class="hwid-value-box">
                    <code>${status.hwid}</code>
                </div>
            </div>
        </div>

        ${status.valid ? `
        <div class="setting-row" style="border-bottom: none;">
            <div class="setting-info">
                <span class="label">${t('expiry_info')}</span>
                <span class="desc">${t('valid_until', { date: `<strong>${status.data.expiry}</strong>` })}</span>
            </div>
        </div>
        ` : ''}

        <div class="divider"></div>

        <div class="license-action-section">
            <h4 style="margin-bottom: 12px;">${t('activate_license_title')}</h4>
            <div class="key-input-wrapper">
                <textarea id="license-key-input" placeholder="${t('license_key_placeholder')}"></textarea>
            </div>
            <button id="activate-license-btn" class="primary-btn-premium">
                <i class="fas fa-key"></i> ${t('activate_license_btn')}
            </button>
        </div>
    `;
    
    bindLicenseEvents(container);
}

function bindLicenseEvents(container) {
    const copyBtn = container.querySelector('#copy-hwid-btn');
    if (copyBtn) {
        copyBtn.onclick = () => {
            const hwid = container.querySelector('code').textContent;
            navigator.clipboard.writeText(hwid);
            // Simple visual feedback
            const icon = copyBtn.querySelector('i');
            icon.className = 'fas fa-check';
            setTimeout(() => icon.className = 'fas fa-copy', 2000);
        };
    }

    const activateBtn = container.querySelector('#activate-license-btn');
    if (activateBtn) {
        activateBtn.onclick = async () => {
            const key = container.querySelector('#license-key-input').value.trim();
            if (!key) {
                alert(t('enter_license_key'));
                return;
            }
            
            activateBtn.disabled = true;
            activateBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('verifying')}`;
            
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
                alert(t('connection_error') + err.message);
            } finally {
                activateBtn.disabled = false;
                activateBtn.innerHTML = `<i class="fas fa-key"></i> ${t('activate_license_btn')}`;
            }
        };
    }
}
