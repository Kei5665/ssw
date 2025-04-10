# Project Rules & Requirements

## New Landing Page (SSW Taxi Driver Recruitment)

**1. Purpose:**
   - Recruit foreign nationals with Specific Skills Worker (SSW) visa (for automobile driving services) as taxi drivers.
   - Encourage users to contact via LINE for consultation.

**2. Target Audience:**
   - Foreign nationals residing in or outside Japan who hold or plan to obtain the SSW visa for automobile driving services.
   - Individuals looking for taxi driver jobs in Japan.

**3. Target Path:**
   - `/` (Overwrite `ssw-app/app/page.tsx`)

**4. Key Components (Based on Design Image & Demo):**
   - Header: Logo, Navigation (Service Details, Hiring Process, FAQ - initially page anchors), Language Switch (design only for now), LINE Inquiry Button.
   - Hero Section: Catchphrase, Sub-headline, LINE Consultation Button (Free, 1-min).
   - Problem Appeal Section: Address common concerns (Can't find job, Interview anxiety, Life preparation in Japan).
   - Service Overview: Introduction to RIDE JOB FOR SSW.
   - Service Features:
     - Dedicated support from company selection to post-hiring follow-up.
     - Life support after arrival in Japan.
     - Assistance with residence status acquisition.
   - Call to Action (Mid-page): Reiterate problem-solving message, LINE Consultation Button.
   - Testimonials (Senior Drivers' Voices): Showcase experiences of drivers from different countries.
   - Call to Action (Bottom): Final prompt for LINE consultation.
   - Footer: (To be defined - likely copyright, company info, privacy policy link etc.)

**5. Functionality:**
   - Navigation Links: Page anchors (scroll to corresponding section).
   - LINE Buttons: Link to open LINE app or display QR code (Specific action TBD).
   - Language Switch: Design only for the initial implementation.
   - Responsive Design: Ensure proper display on various screen sizes (PC, tablet, smartphone).

**6. Tech Stack & Styling:**
   - Framework: Next.js (App Router)
   - Language: TypeScript
   - Styling: Tailwind CSS

**7. Design Reference:**
   - Image provided by user.
   - Demo page: [https://jokyo-career.my.canva.site/250402-ssw-lp-design](https://jokyo-career.my.canva.site/250402-ssw-lp-design)

**8. Future Considerations (Phase 2 or later):**
   - Implement actual language switching functionality.
   - Link navigation items to separate detail pages if needed.
   - Add form integration if required.
   - SEO optimization. 