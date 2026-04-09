# 봉신교회 웹사이트 프로젝트 요약

## 기술 스택

| 항목 | 내용 |
|------|------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Font | Nanum Gothic (Google Fonts) |

---

## 실행 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

---

## 브랜드 색상

| 용도 | 색상 | 코드 |
|------|------|------|
| 포인트 (Gold) | 금색 | `#f8b551` |
| 강조 (Blue) | 파랑 | `#00a0e9` |
| 본문 | 진회색 | `#666666` |
| 구분선 | 연회색 | `#d2d2d2` |

---

## 반응형 브레이크포인트

- **모바일:** 400px (슬라이드 드로어 메뉴)
- **태블릿:** 800px
- **데스크톱:** 1200px

---

## 페이지 구성

### 메인 페이지 (`/`)
- HeroSlider — 3장 이미지, 5초 자동 전환, 이전/다음/도트 네비
- 담임목사 인사말 섹션
- 예배 시간표 카드 그리드
- 공지사항 목록
- 바로가기 아이콘 그리드

### 교회소개
| 경로 | 페이지 |
|------|--------|
| `/church/greeting` | 인사말 |
| `/church/history` | 교회연혁 (타임라인) |
| `/church/staff` | 섬기는분들 (카드 그리드) |
| `/church/worship-info` | 예배안내 (표) |
| `/church/new-member` | 새가족안내 (5단계 프로세스) |
| `/church/directions` | 오시는길 (지도 플레이스홀더 + 교통 정보) |
| `/church/offering` | 온라인헌금안내 (계좌 목록) |

### 봉신TV
| 경로 | 페이지 |
|------|--------|
| `/tv/sunday` | 주일예배 (YouTube 영상) |
| `/tv/special-song` | 봉헌송/특송 |
| `/tv/choir` | 찬양대 |

### 다음세대
| 경로 | 페이지 |
|------|--------|
| `/nextgen/infant` | 영아부 (0-2세) |
| `/nextgen/toddler` | 유아부 (3-4세) |
| `/nextgen/kinder` | 유치부 (5-7세) |
| `/nextgen/elementary` | 초등부 |
| `/nextgen/middle` | 중등부 |
| `/nextgen/high` | 고등부 |
| `/nextgen/youth` | 청년공동체 |

### 선교
| 경로 | 페이지 |
|------|--------|
| `/missions/status` | 선교현황 (선교사 카드) |
| `/missions/center` | 선교센터 |

### 기타
| 경로 | 페이지 |
|------|--------|
| `/contact` | 문의 (mailto 폼) |
| `*` | 404 페이지 |

---

## 파일 구조

```
src/
├── types/
│   ├── navigation.ts       # NavItem, NavChild 인터페이스
│   └── content.ts          # StaffMember, HistoryEntry, Ministry 등
├── data/
│   ├── navigation.ts       # 전체 메뉴 트리 (NAV_ITEMS)
│   ├── churchInfo.ts       # 교회 기본 정보, 예배 시간
│   ├── historyData.ts      # 교회 연혁
│   ├── staffData.ts        # 교역자/스태프 목록
│   ├── missionData.ts      # 선교사 목록
│   └── ministryData.ts     # 다음세대 부서 정보
├── hooks/
│   ├── useHeroSlider.ts    # 자동 슬라이드 로직
│   └── useScrollLock.ts    # 모바일 메뉴 열릴 때 body 스크롤 잠금
├── components/
│   ├── layout/
│   │   ├── Layout.tsx      # Header + Outlet + Footer
│   │   ├── Header.tsx      # 로고 + 네비게이션
│   │   ├── DesktopNav.tsx  # hover 드롭다운 메뉴
│   │   ├── MobileNav.tsx   # 슬라이드 드로어 + 아코디언
│   │   └── Footer.tsx      # 교회 정보, 바로가기, 예배 시간
│   ├── ui/
│   │   ├── HeroSlider.tsx      # 메인 이미지 슬라이더
│   │   ├── SubPageLayout.tsx   # 사이드바 + 콘텐츠 래퍼
│   │   ├── SidebarNav.tsx      # 서브페이지 좌측 메뉴
│   │   ├── PageHeader.tsx      # 상단 배너 + 빵부스러기
│   │   ├── YoutubeEmbed.tsx    # YouTube iframe
│   │   └── PlaceholderImage.tsx
│   └── sections/               # 메인 페이지 전용
│       ├── WelcomeSection.tsx
│       ├── WorshipSchedule.tsx
│       ├── NoticeBoard.tsx
│       └── QuickLinks.tsx
└── pages/
    ├── HomePage.tsx
    ├── NotFoundPage.tsx
    ├── ContactPage.tsx
    ├── church/   (7개)
    ├── tv/       (3개)
    ├── nextgen/  (7개 + MinistryPage 템플릿)
    └── missions/ (2개)
```

---

## 실제 데이터 교체 방법

### 교회 기본 정보
`src/data/churchInfo.ts` 파일에서 수정:
```ts
export const CHURCH_INFO = {
  name: '봉신교회',
  address: '실제 주소',
  phone: '02-000-0000',
  ...
};
```

### 이미지
`public/images/` 폴더에 이미지 추가:
- **히어로 슬라이드:** `public/images/hero/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
- **교역자 사진:** `public/images/people/[이름].jpg`
- 각 data 파일의 `photo` 필드에 `/images/people/[파일명]` 경로 입력

### YouTube 영상
`src/pages/tv/` 하위 페이지에서 `videoId` 교체:
```ts
const VIDEOS: VideoItem[] = [
  { title: '2026년 4월 6일 주일예배', videoId: 'YouTube_Video_ID', date: '2026-04-06' },
];
```

### 교회 연혁
`src/data/historyData.ts` 수정

### 교역자/스태프
`src/data/staffData.ts` 수정

### 선교사 목록
`src/data/missionData.ts` 수정

### 다음세대 부서
`src/data/ministryData.ts` 수정

---

## 지도 삽입 방법

`src/pages/church/DirectionsPage.tsx`의 지도 플레이스홀더 부분을 실제 지도로 교체:

**Kakao Maps 예시:**
```tsx
<iframe
  src="https://map.kakao.com/link/map/[장소명],위도,경도"
  className="w-full h-72 rounded-lg border-0"
/>
```

**Google Maps 예시:**
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  className="w-full h-72 rounded-lg border-0"
  allowFullScreen
  loading="lazy"
/>
```
