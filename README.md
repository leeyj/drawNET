# drawNET - 엔지니어를 위한 고정밀 네트워크 아키텍처 설계 도구
# drawNET - High-Precision Network Architecture Design Tool for Engineers

<p align="center">
  <img src="./image/logo.png" alt="drawNET Logo" width="180">
</p>

[**한국어(Korean)**](#한국어-korean) | [**English**](#english)

---

<a name="한국어-korean"></a>
## 🇰🇷 한국어 (Korean)

**drawNET**은 복잡한 IT 인프라와 네트워크 토폴로지를 설계하기 위해 개발된 전용 다이어그램 도구입니다. 엔지니어의 실무 경험을 바탕으로, 단순한 그림 그리기를 넘어 **데이터 무결성**과 **레이어 기반의 논리적 아키텍처**를 완벽하게 지원합니다.

![drawNET Main Screenshot](./image/main.png)

### 🚀 주요 기능
- **스마트 그룹화 및 계층 관리:** 노드 간의 포함 관계를 UUID 기반으로 관리하며, 중첩된 그룹 내에서도 가장 안쪽의 객체를 정확히 찾아내는 지능형 선택 시스템.
- **논리적 멀티 레이어 (Multi-Layer):** '물리 레이어'와 '논리 레이어'를 구분하여 설계. 레이어 간 관통 스냅(Ghost Snapping) 지원.
- **프로페셔널 정밀 도구:** 
    - **Surgical Picker:** 겹쳐진 오브젝트를 리스트로 띄워 정밀하게 선택.
    - **Format Painter:** 노드 속성 및 선 스타일 대량 복제.
    - **Object Locking:** 설계 실수 방지를 위한 강력한 객체 고정 기능.
- **하이엔드 리포트 익스포트:** 개별 객체가 살아있는 **전문가용 PPTX 및 PDF 리포트** 자동 생성.
- **오브젝트 스튜디오 (Object Studio):** 이미지를 즉시 고품질 SVG 벡터 아이콘으로 변환하여 자산 라이브러리 구축.

### 📚 도움말 및 가이드
- [**사용자 가이드**](./manual/guide.md)
- [**단축키 일람**](./manual/shortcuts.md)
- [**리치 카드 가이드**](./manual/rich_card.md)

### 💎 라이선스 및 가격 (Alpha TBD)
| 구분 | **Community (Free)** | **Basic (Essential)** | **Pro (Enterprise)** |
| :--- | :---: | :---: | :---: |
| **핵심 혜택** | 3개 레이어 제한 (알파 한정) | **무제한 레이어** | **모든 기능 포함** |
| **내보내기** | .dnet, PNG | + PDF, SVG | **+ PPTX 전용 리포트** |

> **알림:** 현재 drawNET은 **Alpha 버전**입니다. 정식 출시 전까지 모든 기능에 대한 가격 정책은 변경될 수 있습니다.

#### 🔑 Alpha 테스트용 공용 라이선스 키
```text
sP7nmTe1FXAcgki0hYVq4xxH2egDNBx2h4ZSdyS2s8inc9WA7W8MNRKWTsDZDj2BvnbdmVgfLuF76koFf3OvXPY6Mygvt76HBnWOd4sCGXPdAsFNaivCqWQP/lDUa6ruvVmtnajcGMWr4zqL/GfvEtHMrGa718CV1L/rYsy86eTRiUzMZe4rZ17V7uolq9hUtA2vIsli9qUIPZ0w9Gz9aIsJwgUbcW0lOAU6RYeVGinulMsWmGicS+AZl396FKvh0qp6on/yLw93QnbetEZ81GYUIESMv3DZslATCCzjb58fVJFSrZwdmvkq82pRY6wYPyOSPX0Fn7/AUMt+Fccxq9au8FrKeHgvd+gjY+k1KmOcT9QL6fK6ZbA8AR7e1gNCua1UvVlBApGnbnr7TStrVxRcH4n9Hl69JmWhEJpxHJ5VYrLHf9tcpti7ISHJGo6CyC1otr1/S0Io/QZFhZPqpGFBw93E/u2YiUG3Edud86exRo6IfFzaG8C5qG8UFkG0UcXU5JUmGBKt3gpr57vYLCH+AQWhY0D0O92N8G0hweWtXt5uVDWFtkFN9EWelEkSQ25uq1rcNZLdSBBwLpVkaa+ri8OIx6cekHs7a26ukbhAizYMSN2pkT3xFMfj5gVTtPl/HImzkSMXU2/PhRGixlZ5t2elsIMitqmal+KRB2B7Imh3aWQiOiAiVU5JVkVSU0FMIiwgImxldmVsIjogIkJhc2ljIiwgImxwaXJ5IjogIjIwMjYtMDQtMzAiLCAiaXNzdWVkIjogIjIwMjYtMDMtMjIifQ==
```

---

<a name="english"></a>
## 🇺🇸 English

**drawNET** is a dedicated diagramming tool developed for designing complex IT infrastructure and network topologies. Built on real-world engineering experience, it goes beyond simple drawing to fully support **data integrity** and **layer-based logical architectures**.

### 🚀 Key Features
- **Smart Grouping & Hierarchy Management:** Manages relationships between nodes using UUIDs, with an intelligent selection system that accurately finds the innermost objects even in nested groups.
- **Logical Multi-Layer:** Design separate 'Physical' and 'Logical' layers. Supports 'Ghost Snapping' across layers for clear visualization of complex network structures.
- **Professional Precision Tools:** 
    - **Surgical Picker:** Select overlapping objects precisely with a sidebar list.
    - **Format Painter:** Mass duplicate node properties and line styles.
    - **Object Locking:** Robust locking mechanism to prevent design errors.
- **High-End Report Export:** Automatically generate **professional PPTX and PDF reports** where individual objects remain editable.
- **Object Studio:** Instantly convert images or photos into high-quality SVG vector icons to build your own asset library.

### 📚 Documentation
- [**User Guide**](./manual/guide.md)
- [**Keyboard Shortcuts**](./manual/shortcuts.md)
- [**Rich Card Guide**](./manual/rich_card.md)

### 💎 License & Pricing (Alpha TBD)
| License | **Community (Free)** | **Basic (Essential)** | **Pro (Enterprise)** |
| :--- | :---: | :---: | :---: |
| **Core Benefits** | 3 Layer Limit (Alpha only) | **Unlimited Layers** | **All Features Included** |
| **Export Options** | .dnet, PNG | + PDF, SVG | **+ Premium PPTX Reports** |

> **Note:** drawNET is currently in **Alpha**. Pricing and licensing policies are subject to change before the final (v1.0) release.

#### 🔑 Public Universal License Key for Alpha Testing
Use the key below in the **License Management** tab under the System Menu.
```text
(Same key as above)
```

---

## ❤️ 후원 및 피드백 (Support)
- **Ko-fi 후원 (Donate):** [https://ko-fi.com/leeyj78](https://ko-fi.com/leeyj78)
- **문의 및 제안 (Inquiries):** [leeyj78@gmail.com](mailto:leeyj78@gmail.com)

## ⚖️ License
Copyright © 2026 drawNET Team. All Rights Reserved.
