/* ==========================================================================
   Kilment International Building Construction - Main JavaScript Engine & i18n
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------
  // 1. Bilingual Translation Dictionary (AR & EN)
  // --------------------------------------------------
  const translations = {
    ar: {
      nav_home: "الرئيسية",
      nav_about: "من نحن",
      nav_services: "خدماتنا",
      nav_projects: "مشاريعنا",
      nav_why_us: "لماذا نحن",
      nav_testimonials: "آراء العملاء",
      nav_contact: "تواصل معنا",
      nav_quote_btn: "اطلب عرض سعر",
      hero_badge: "رواد المقاولات والتشييد المعماري في دولة الكويت",
      hero_title_1: "كيلمنت الدولية لتشييد المباني",
      hero_title_2: "نبني المستقبل بإتقان وجودة",
      hero_desc: "شركة كويتية متخصصة في الإنشاءات المعمارية والمقاولات العامة، نقدم حلولًا هندسية متكاملة وفق أعلى معايير الجودة والابتكار والالتزام بالمواعيد.",
      hero_cta_1: "اطلب استشارة هندسية",
      hero_cta_2: "اطلب عرض سعر",
      hero_cta_3: "تواصل معنا",
      hero_scroll: "اكتشف المزيد",
      stat_1_val: "+20 سنة",
      stat_1_title: "خبرة هندسية عريقة",
      stat_1_desc: "في التشييد والمقاولات الحديثة",
      stat_2_val: "+873 مشروع",
      stat_2_title: "تم إنجازه بنجاح",
      stat_2_desc: "بمختلف محافظات الكويت",
      stat_3_val: "100%",
      stat_3_title: "التزام بالمواعيد والمقاييس",
      stat_3_desc: "تسليم بالموعد المعتمد",
      stat_4_val: "أعلى معايير",
      stat_4_title: "الجودة والأمان المعماري",
      stat_4_desc: "تراخيص ومواصفات دولية",
      about_subtitle: "عن شركة كيلمنت الدولية",
      about_title_1: "نبني الرؤى المعمارية بنماذج هندسية ",
      about_title_2: "تستحق التقدير العالمي",
      about_p1: "تعد شركة كيلمنت الدولية لتشييد المباني واحدة من كبرى الشركات المتخصصة في مجال المقاولات العامة والإنشاءات المعمارية في دولة الكويت. على مدار عقدين من الإنجازات، نجحنا في ترسيخ مكانتنا عبر تنفيذ أضخم المشاريع السكنية والتجارية والاستثمارية وفق أعلى المعايير العالمية.",
      about_v_title: "رؤيتنا",
      about_v_desc: "الريادة الأولى في قطاع المقاولات والإنشاءات بالمنطقة.",
      about_m_title: "رسالتنا",
      about_m_desc: "تقديم بناء متميز يجمع الفخامة والدقة والأمان الإنشائي.",
      about_val_title: "قيمنا",
      about_val_desc: "النزاهة، الالتزام، الأمانة الهندسية، والتطوير المستمر.",
      about_btn: "اطلب استشارة مجانية الآن",
      cnt_years: "خبرة في تشييد المباني",
      cnt_projects: "مشروع منجز في الكويت",
      cnt_team: "مهندس ومتخصص",
      cnt_satisfaction: "نسبة رضا العملاء والمستثمرين",
      services_subtitle: "خدماتنا الهندسية المتكاملة",
      services_title: "حلول إنشائية معمارية بالمستوى العالمي",
      services_desc: "نقدم باقة واسعة من الخدمات الهندسية والمقاولات المصممة لتلبية تطلعات المشاريع السكنية والتجارية والاستثمارية في دولة الكويت.",
      serv_1_title: "المقاولات العامة",
      serv_1_desc: "تنفيذ كافة أعمال الإنشاءات والمقاولات الكبرى وفق مخططات هندسية دقيقة ومعايير أمان عالية.",
      serv_2_title: "الإنشاءات السكنية",
      serv_2_desc: "بناء المجمعات السكنية والشقق الفاخرة والمجمعات العائلية بأعلى مستويات الجودة.",
      serv_3_title: "الإنشاءات التجارية",
      serv_3_desc: "بناء المجمعات والمراكز التجارية والمكاتب الإدارية الحديثة بتصاميم عصرية جذابة.",
      serv_4_title: "بناء الفلل والقصور",
      serv_4_desc: "تصميم وبناء الفلل الخاصة والقصور الفاخرة بطابع معماري متميز ومواصفات خاصة.",
      serv_5_title: "المباني الاستثمارية",
      serv_5_desc: "إنشاء البنايات والعمارات الاستثمارية التي تحقق أقصى عائد استثماري بأعلى كفاءة.",
      serv_6_title: "التصميم المعماري",
      serv_6_desc: "ابتكار تصاميم ومخططات معمارية مستحدثة تجمع بين الأناقة والاستغلال الأنسب للمساحات.",
      serv_7_title: "التصميم الداخلي",
      serv_7_desc: "تجهيز وتصميم الديكورات الداخلية الفاخرة التي تعكس أسلوب الحياة العصري.",
      serv_8_title: "التشطيبات الفاخرة",
      serv_8_desc: "تنفيذ كافة أعمال التشطيبات الداخلية والخارجية بدقة متناهية وأجود المواد.",
      serv_9_title: "الإشراف الهندسي",
      serv_9_desc: "متابعة وإشراف دائم على مراحل التنفيذ بالموقع لضمان مطابقة المواصفات القياسية.",
      serv_10_title: "إدارة المشاريع",
      serv_10_desc: "إدارة شاملة للجداول الزمنية والميزانيات لضمان تسليم المشاريع بكفاءة وفي وقتها.",
      serv_11_title: "الترميم والصيانة",
      serv_11_desc: "تحديث وتطوير المباني القائمة وإجراء كافة التعديلات الإنشائية والمعمارية الشاملة.",
      serv_12_title: "الاستشارات الهندسية",
      serv_12_desc: "دراسات الجدوى والاستشارات الفنية والحلول الإنشائية المبتكرة قبل وأثناء التنفيذ.",
      serv_req_btn: "اطلب الخدمة",
      projects_subtitle: "معرض الإنجازات المعمارية",
      projects_title: "أبرز مشاريعنا في دولة الكويت",
      projects_desc: "استكشف نماذج من مشاريعنا التي تجسد الإبداع المعماري وجودة البناء في مختلف أنحاء الكويت.",
      filter_all: "الكل",
      filter_res: "سكني",
      filter_com: "تجاري",
      filter_inv: "استثماري",
      filter_int: "تصميم داخلي",
      proj_details_btn: "عرض التفاصيل",
      why_subtitle: "معايير التميز والفرادة",
      why_title: "لماذا تختار شركة كيلمنت الدولية؟",
      why_desc: "نجمع بين الالتزام الأخلاقي، الدقة الهندسية المتناهية، والمهارة الفنية لتوفير بيئة إنشائية تتجاوز توقعات العملاء والمستثمرين.",
      why_1_title: "جودة التنفيذ المتناهية",
      why_1_desc: "نطبق صرامة تامة في معايير ضبط الجودة واختبار المواد الإنشائية وفق أحدث المواصفات القياسية العالمية.",
      why_2_title: "الالتزام الصارم بالمواعيد",
      why_2_desc: "نحترم الجدول الزمني تماماً وتسليم المشاريع في مواعيدها المحددة بدقة دون أي تأخير.",
      why_3_title: "أسعار وميزانيات تنافسية",
      why_3_desc: "توفير حلول اقتصادية ذكية تضمن تحقيق أقصى قيمة مقابل الاستثمار المالي دون المساومة على الجودة.",
      why_4_title: "فريق هندسي محترف",
      why_4_desc: "نخبة من المهندسين والمشرفين ذوي الكفاءة والخبرة الطويلة في إدارة وتنفيذ أعقد المشاريع الإنشائية.",
      why_5_title: "استخدام أفضل المواد العالمية",
      why_5_desc: "اعتماد خامات البناء المعتمدة من أكبر الموردين الدوليين لضمان المتانة والعمر الإنشائي الممتد.",
      why_6_title: "خدمة صيانة ما بعد التسليم",
      why_6_desc: "دعم فني وضمان متكامل وشامل يمتد لسنوات لضمان الطمأنينة الكاملة لعملائنا بعد الاستلام.",
      testi_subtitle: "ثقة الشركاء والعملاء",
      testi_title: "ماذا يقول عملاؤنا عن تجربتهم معنا؟",
      testi_desc: "نعتز بالثقة الغالية التي يوليها لنا كبار المطورين العقاريين وأصحاب المشاريع في دولة الكويت.",
      testi_q1: "\"تعاملنا مع كيلمنت في بناء برجنا التجاري بالعاصمة، وكان الالتزام بالمواعيد والجودة الإنشائية يفوق الوصف. شركة ذات احترافية عالية جداً.\"",
      testi_q2: "\"فريق كيلمنت نفّذ فيلتنا الخاصة باحترافية شديدة. الدقة في التشطيبات والتنسيق الهندسي جعل العملية سلسة بدون أي عناء. ننصح بالتعامل معهم.\"",
      testi_q3: "\"إدارة المشاريع لديهم ممتازة، والتقارير الدورية دقيقة جداً. تم تسليم المبنى الاستثماري قبل الموعد المحدد بثلاثة أسابيع.\"",
      testi_q4: "\"التصميم الداخلي الذي نفّذوه للمقر الرئيسي أحدث انطباعاً مبهراً لكل الزوار. حلول هندسية مبتكرة ومواد استثنائية.\"",
      testi_name1: "المهندس سليمان العتيبي",
      testi_name2: "الشيخ فهد المالك",
      testi_name3: "أحمد النصار",
      testi_name4: "د. مشاري الحمد",
      testi_role1: "مطور عقاري — الكويت",
      testi_role2: "مالك مشروع سكني — المسيلة",
      testi_role3: "رئيس مجموعة النصار للاستثمار",
      testi_role4: "رئيس مجلس إدارة شركة أفق",
      testi_init1: "س.ع",
      testi_init2: "ف.م",
      testi_init3: "أ.ن",
      testi_init4: "د.م",
      years_word: "عاماً",
      proj1_title: "برج الكوت المالي",
      proj1_loc: "العاصمة - الكويت · 8,500 m²",
      proj1_type: "إنشاءات تجارية وأبراج",
      proj1_desc: "برج تجاري مالي ذو واجهة زجاجية ذكية، مجهز بأحدث تقنيات الطاقة المستدامة.",
      proj2_title: "فيلا المسيلة المعمارية",
      proj2_loc: "المسيلة - الكويت · 1,800 m²",
      proj2_type: "إنشاءات سكنية",
      proj2_desc: "فيلا سكنية راقية بطراز معماري حديث وتجهيزات فائقة الفخامة على 3 طوابق.",
      proj3_title: "بهو الشرق الاستثماري",
      proj3_loc: "الشرق - الكويت · 950 m²",
      proj3_type: "تصميم داخلي",
      proj3_desc: "تصميم داخلي فاخر باستخدام الرخام الإيطالي والإضاءة الذهبية المميزة.",
      proj4_title: "أبراج الجوهرة الاستثمارية",
      proj4_loc: "حولي - الكويت · 12,000 m²",
      proj4_type: "مباني استثمارية",
      proj4_desc: "أبراج استثمارية سكنية متكاملة الخدمات مع مواقف ذكية وحدائق معلقة.",
      proj5_title: "قصر الخيران المودرن",
      proj5_loc: "الخيران - الكويت · 2,500 m²",
      proj5_type: "فلل وشاليهات",
      proj5_desc: "قصر وشاليه شاطئي مودرن مع حمامات سباحة بانورامية وواجهات مقاومة للمناخ البحري.",
      proj6_title: "مول السالمية التجاري",
      proj6_loc: "السالمية - الكويت · 6,200 m²",
      proj6_type: "مجمعات تجارية",
      proj6_desc: "مول تجاري متعدد الطوابق بأحدث تصاميم الواجهات الزجاجية وأنظمة التكييف المركزية.",
      proj7_title: "مجمع النقرة السكني",
      proj7_loc: "النقرة - الكويت · 3,200 m²",
      proj7_type: "مجمعات سكنية",
      proj7_desc: "مجمع سكني متكامل من 12 وحدة سكنية مع حدائق داخلية ومواقف تحت الأرض.",
      proj8_title: "عمارات الفحيحيل الاستثمارية",
      proj8_loc: "الفحيحيل - الكويت · 4,500 m²",
      proj8_type: "مباني استثمارية",
      proj8_desc: "عمارات استثمارية فاخرة بواجهات عصرية وخدمات ذكية تحقق أعلى عائد للمستثمرين.",
      opt_villa: "بناء فيلا / قصر",
      opt_invest: "مبنى استثماري",
      opt_commercial: "مجمع تجاري",
      opt_general: "مقاولات عامة",
      opt_design: "تصميم معماري / داخلي",
      opt_renov: "ترميم وصيانة",
      modal_quote_type: "نوع المشروع",
      ph_loc: "المنطقة، المحافظة...",
      ph_email: "name@domain.kw (اختياري)",
      modal_area_label: "المساحة",
      modal_type_label: "نوع المشروع",
      modal_close: "إغلاق",
      contact_badge: "تواصل مباشر وخدمة العملاء على مدار الساعة",
      contact_title: "ابدأ مشروعك المعماري مع كيلمنت الدولية",
      contact_desc: "نرحب باستفساراتكم ويسعدنا تقديم الاستشارات الفنية المتخصصة وعروض الأسعار لمشاريعكم الإنشائية في دولة الكويت.",
      cnt_office_h: "مقر الشركة في المرقاب",
      cnt_office_p: "المرقاب - برج علي - الدور M1",
      cnt_phone_h: "الهاتف المباشر",
      cnt_wa_h: "واتساب المبيعات 24/7",
      cnt_mail_h: "البريد الإلكتروني",
      cnt_social_h: "تابع حسابات كيلمنت الدولية الرسمية",
      form_title: "أرسل استفسارك الإنشائي المباشر",
      lbl_name: "الاسم الكامل *",
      lbl_phone: "رقم الهاتف / الواتساب *",
      lbl_email: "البريد الإلكتروني *",
      lbl_msg: "تفاصيل الاستفسار أو المشروع *",
      ph_name: "أدخل اسمك الكريم",
      ph_msg: "اكتب تفاصيل المشروع، الموقع، والخدمة المطلوبة...",
      form_submit_btn: "إرسال الرسالة الآن",
      footer_bio: "شركة كيلمنت الدولية لتشييد المباني - شركة كويتية متخصصة في المقاولات العامة والإنشاءات المعمارية، نحول الأفكار إلى معالم هندسية خالدة بأعلى مقاييس الجودة والابتكار.",
      footer_links_title: "روابط سريعة",
      footer_contact_title: "معلومات التواصل",
      copyright: "© 2026 كيلمنت الدولية لتشييد المباني - جميع الحقوق محفوظة.",
      footer_dev: "جودة تفوق التوقعات وشراكة تمتد معكم نحو الإنجاز",
      modal_quote_title: "طلب عرض سعر / استشارة",
      modal_quote_subtitle: "يرجى ملء البيانات التالية وسيصلك عرض السعر من قسم الهندسة",
      modal_quote_area: "المساحة التقديرية (م²)",
      modal_quote_loc: "موقع المشروع في الكويت",
      modal_quote_submit: "إرسال طلب عرض السعر",
      toast_contact_msg: "شكراً لتواصلك معنا! سيقوم فريق كيلمنت الهندسي بالتواصل معك في أقرب وقت.",
      toast_quote_msg: "تم استلام طلب عرض السعر بنجاح! يسعدنا تقديم الخدمة."
    },
    en: {
      nav_home: "Home",
      nav_about: "About Us",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_why_us: "Why Us",
      nav_testimonials: "Testimonials",
      nav_contact: "Contact Us",
      nav_quote_btn: "Get a Quote",
      hero_badge: "Pioneers of Architectural Construction in Kuwait",
      hero_title_1: "Kilment International<br>Construction",
      hero_title_2: "Building Future with Precision & Excellence",
      hero_desc: "A premier Kuwaiti company specializing in architectural construction and general contracting, delivering integrated engineering solutions according to global quality standards.",
      hero_cta_1: "Request Engineering Consultation",
      hero_cta_2: "Request a Quote",
      hero_cta_3: "Contact Us",
      hero_scroll: "Discover More",
      stat_1_val: "+20 Years",
      stat_1_title: "Rich Engineering Experience",
      stat_1_desc: "In modern building contracting",
      stat_2_val: "+873 Projects",
      stat_2_title: "Successfully Completed",
      stat_2_desc: "Across all Kuwait governorates",
      stat_3_val: "100%",
      stat_3_title: "Timeline & Spec Commitment",
      stat_3_desc: "On-time guaranteed delivery",
      stat_4_val: "Top Standards",
      stat_4_title: "Architectural Safety & Quality",
      stat_4_desc: "International codes & licenses",
      about_subtitle: "About Kilment International",
      about_title_1: "Building Architectural Visions into ",
      about_title_2: "World-Class Landmarks",
      about_p1: "Kilment International Building Construction is one of the leading companies in general contracting and architectural engineering in Kuwait. Over two decades of achievement, we have built a reputation for delivering residential, commercial, and investment projects.",
      about_v_title: "Our Vision",
      about_v_desc: "To lead the regional building and construction sector.",
      about_m_title: "Our Mission",
      about_m_desc: "Delivering luxury, structural safety, and engineering precision.",
      about_val_title: "Our Values",
      about_val_desc: "Integrity, commitment, engineering ethics, and innovation.",
      about_btn: "Request Free Consultation Now",
      cnt_years: "Years of Building Experience",
      cnt_projects: "Completed Kuwait Projects",
      cnt_team: "Engineers & Specialists",
      cnt_satisfaction: "Client & Investor Satisfaction",
      services_subtitle: "Integrated Engineering Services",
      services_title: "World-Class Construction Solutions",
      services_desc: "Providing a comprehensive range of engineering and contracting services tailored for residential, commercial, and investment developments in Kuwait.",
      serv_1_title: "General Contracting",
      serv_1_desc: "Execution of major construction and contracting works according to precise architectural plans and safety standards.",
      serv_2_title: "Residential Construction",
      serv_2_desc: "Construction of luxury residential complexes, villas, and family estates with premium quality.",
      serv_3_title: "Commercial Construction",
      serv_3_desc: "Building modern commercial centers, office towers, and retail complexes with contemporary design.",
      serv_4_title: "Villa & Palace Building",
      serv_4_desc: "Custom architectural design and construction for private luxury villas and palaces.",
      serv_5_title: "Investment Buildings",
      serv_5_desc: "Development of high-yield investment towers and commercial buildings maximizing ROI.",
      serv_6_title: "Architectural Design",
      serv_6_desc: "Innovative architectural concepts combining luxury aesthetics and optimal space utilization.",
      serv_7_title: "Interior Design",
      serv_7_desc: "High-end interior design and execution reflecting modern luxury lifestyles.",
      serv_8_title: "Luxury Fit-outs",
      serv_8_desc: "Flawless execution of interior and exterior finishing works using premium materials.",
      serv_9_title: "Engineering Supervision",
      serv_9_desc: "Continuous site supervision to ensure full compliance with international standards.",
      serv_10_title: "Project Management",
      serv_10_desc: "Comprehensive timeline and budget management ensuring efficient, on-time delivery.",
      serv_11_title: "Renovation & Maintenance",
      serv_11_desc: "Upgrading existing structures with complete architectural and structural renovations.",
      serv_12_title: "Engineering Consultancy",
      serv_12_desc: "Feasibility studies, technical advice, and structural solutions pre- and post-construction.",
      serv_req_btn: "Request Service",
      projects_subtitle: "Architectural Portfolio",
      projects_title: "Our Featured Projects in Kuwait",
      projects_desc: "Explore our portfolio showcasing architectural innovation and construction quality across Kuwait.",
      filter_all: "All",
      filter_res: "Residential",
      filter_com: "Commercial",
      filter_inv: "Investment",
      filter_int: "Interior Design",
      proj_details_btn: "View Details",
      why_subtitle: "Excellence & Distinction",
      why_title: "Why Choose Kilment International?",
      why_desc: "We combine ethical commitment, refined engineering precision, and technical skill to provide a construction environment that exceeds client and investor expectations.",
      why_1_title: "Flawless Execution Quality",
      why_1_desc: "Strict quality control and material testing according to international standards.",
      why_2_title: "Strict Timetable Adherence",
      why_2_desc: "Full respect for project schedules and guaranteed on-time delivery.",
      why_3_title: "Competitive Pricing & Budgets",
      why_3_desc: "Smart engineering solutions maximizing value without compromising quality.",
      why_4_title: "Expert Engineering Team",
      why_4_desc: "Top-tier engineers and supervisors managing complex construction projects.",
      why_5_title: "Premium International Materials",
      why_5_desc: "Certified materials sourced from top global suppliers for extended durability.",
      why_6_title: "Post-Handover Warranty",
      why_6_desc: "Comprehensive multi-year warranty and technical support after delivery.",
      testi_subtitle: "Client & Partner Trust",
      testi_title: "What Our Clients Say About Us",
      testi_desc: "We take pride in the trust placed in us by leading real estate developers and project owners in Kuwait.",
      testi_q1: "\"Working with Kilment on our commercial tower in the Capital was exceptional — their commitment to deadlines and build quality defies description. A truly professional firm.\"",
      testi_q2: "\"The Kilment team executed our private villa with outstanding professionalism. The precision of the finishes and engineering coordination made the process smooth and effortless. Highly recommended.\"",
      testi_q3: "\"Their project management is excellent and the periodic reports are highly accurate. The investment building was delivered three weeks ahead of schedule.\"",
      testi_q4: "\"The interior design they delivered for our headquarters left a stunning impression on every visitor. Innovative engineering solutions and exceptional materials.\"",
      testi_name1: "Eng. Sulaiman Al-Otaibi",
      testi_name2: "Sheikh Fahad Al-Malik",
      testi_name3: "Ahmed Al-Nassar",
      testi_name4: "Dr. Mishari Al-Hamad",
      testi_role1: "Real Estate Developer — Kuwait",
      testi_role2: "Residential Project Owner — Messila",
      testi_role3: "Chairman of Al-Nassar Investment Group",
      testi_role4: "Chairman of Afaq Company",
      testi_init1: "S.A",
      testi_init2: "F.M",
      testi_init3: "A.N",
      testi_init4: "M.H",
      years_word: "Years",
      proj1_title: "Al-Kout Financial Tower",
      proj1_loc: "Kuwait City - Kuwait · 8,500 m²",
      proj1_type: "Commercial Towers & Construction",
      proj1_desc: "A financial commercial tower with a smart glass facade, equipped with the latest sustainable energy technologies.",
      proj2_title: "Messila Architectural Villa",
      proj2_loc: "Messila - Kuwait · 1,800 m²",
      proj2_type: "Residential Construction",
      proj2_desc: "An upscale residential villa with a modern architectural style and ultra-luxury finishes across 3 floors.",
      proj3_title: "Al-Sharq Atrium",
      proj3_loc: "Al-Sharq - Kuwait · 950 m²",
      proj3_type: "Interior Design",
      proj3_desc: "A luxurious interior design featuring Italian marble and distinctive gold lighting.",
      proj4_title: "Al-Jawhara Investment Towers",
      proj4_loc: "Hawally - Kuwait · 12,000 m²",
      proj4_type: "Investment Buildings",
      proj4_desc: "Fully-serviced residential investment towers with smart parking and hanging gardens.",
      proj5_title: "Al-Khairan Modern Palace",
      proj5_loc: "Al-Khairan - Kuwait · 2,500 m²",
      proj5_type: "Villas & Chalets",
      proj5_desc: "A modern beachfront palace and chalet with panoramic pools and marine-climate-resistant facades.",
      proj6_title: "Salmiya Commercial Mall",
      proj6_loc: "Salmiya - Kuwait · 6,200 m²",
      proj6_type: "Commercial Complexes",
      proj6_desc: "A multi-story shopping mall with the latest glass facade designs and central air conditioning systems.",
      proj7_title: "Al-Nuqra Residential Complex",
      proj7_loc: "Al-Nuqra - Kuwait · 3,200 m²",
      proj7_type: "Residential Complexes",
      proj7_desc: "A complete residential complex of 12 housing units with interior gardens and underground parking.",
      proj8_title: "Fahaheel Investment Buildings",
      proj8_loc: "Fahaheel - Kuwait · 4,500 m²",
      proj8_type: "Investment Buildings",
      proj8_desc: "Luxurious investment buildings with modern facades and smart services delivering the highest returns for investors.",
      opt_villa: "Villa / Palace Construction",
      opt_invest: "Investment Building",
      opt_commercial: "Commercial Complex",
      opt_general: "General Contracting",
      opt_design: "Architectural / Interior Design",
      opt_renov: "Renovation & Maintenance",
      modal_quote_type: "Project Type",
      ph_loc: "Area, Governorate...",
      ph_email: "name@domain.kw (optional)",
      modal_area_label: "Area",
      modal_type_label: "Project Type",
      modal_close: "Close",
      contact_badge: "Direct Contact & 24/7 Customer Support",
      contact_title: "Start Your Building Project with Kilment",
      contact_desc: "We welcome your inquiries and are pleased to provide expert consultation and quotes for your construction projects in Kuwait.",
      cnt_office_h: "Kuwait Office - Mirqab",
      cnt_office_p: "Al-Mirqab - Ali Tower - Floor M1",
      cnt_phone_h: "Direct Telephone",
      cnt_wa_h: "Sales WhatsApp 24/7",
      cnt_mail_h: "Official Email",
      cnt_social_h: "Follow Kilment International Official Channels",
      form_title: "Send Your Direct Inquiry",
      lbl_name: "Full Name *",
      lbl_phone: "Phone / WhatsApp *",
      lbl_email: "Email Address *",
      lbl_msg: "Inquiry or Project Details *",
      ph_name: "Enter your full name",
      ph_msg: "Describe your project, location, and required services...",
      form_submit_btn: "Send Message Now",
      footer_bio: "Kilment International Building Construction W.L.L. - A premier Kuwaiti contracting firm transforming ideas into enduring architectural landmarks.",
      footer_links_title: "Quick Links",
      footer_contact_title: "Contact Info",
      copyright: "© 2026 Kilment International Building Construction - All Rights Reserved.",
      footer_dev: "Quality beyond expectations — a partnership built for achievement",
      modal_quote_title: "Request a Quote / Consultation",
      modal_quote_subtitle: "Fill out the details below and our engineering team will get back to you.",
      modal_quote_area: "Estimated Area (m²)",
      modal_quote_loc: "Project Location in Kuwait",
      modal_quote_submit: "Submit Quote Request",
      toast_contact_msg: "Thank you for reaching out! Our engineering team will contact you shortly.",
      toast_quote_msg: "Quote request received successfully! We are delighted to assist you."
    }
  };

  let currentLang = localStorage.getItem('kilment_lang') || 'en';
  let testimonialsSwiper = null;

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('kilment_lang', lang);
    const html = document.documentElement;
    const langLabel = document.getElementById('lang-label');

    if (lang === 'en') {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      document.title = 'Kilment International Building Construction W.L.L. | Kuwait';
      if (langLabel) langLabel.innerText = 'العربية';
    } else {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      document.title = 'كيلمنت الدولية لتشييد المباني | Kilment International Building Construction - الكويت';
      if (langLabel) langLabel.innerText = 'English';
    }

    // Replace all elements with data-i18n key
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
          elem.placeholder = translations[lang][key];
        } else {
          elem.innerHTML = translations[lang][key];
        }
      }
    });

    // Replace placeholders with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(elem => {
      const key = elem.getAttribute('data-i18n-ph');
      if (translations[lang] && translations[lang][key]) {
        elem.placeholder = translations[lang][key];
      }
    });

    // Flip directional arrow icons based on layout direction
    // In RTL mode arrows point left (→ back = ←), in LTR arrows point right (→ forward = →)
    document.querySelectorAll('i.fa-arrow-left').forEach(icon => {
      if (lang === 'en') {
        icon.classList.replace('fa-arrow-left', 'fa-arrow-right');
        icon.setAttribute('data-was-left', '1');
      }
    });
    document.querySelectorAll('i.fa-arrow-right[data-was-left="1"]').forEach(icon => {
      if (lang === 'ar') {
        icon.classList.replace('fa-arrow-right', 'fa-arrow-left');
        icon.removeAttribute('data-was-left');
      }
    });

    // Fix footer border side: RTL uses border-right, LTR uses border-left
    document.querySelectorAll('[class*="border-r-2"]').forEach(el => {
      if (lang === 'en') {
        el.classList.replace('border-r-2', 'border-l-2');
        el.classList.replace('pr-3', 'pl-3');
        el.setAttribute('data-border-flipped', '1');
      }
    });
    document.querySelectorAll('[data-border-flipped="1"]').forEach(el => {
      if (lang === 'ar') {
        el.classList.replace('border-l-2', 'border-r-2');
        el.classList.replace('pl-3', 'pr-3');
        el.removeAttribute('data-border-flipped');
      }
    });

    // Recompute Swiper layout after content/direction change
    if (testimonialsSwiper) {
      testimonialsSwiper.changeLanguageDirection(lang === 'en' ? 'ltr' : 'rtl');
      testimonialsSwiper.update();
      testimonialsSwiper.slideTo(0, 0);
      testimonialsSwiper.autoplay?.start();
    }
  };

  // Switch button click
  const langSwitchBtn = document.getElementById('lang-switch-btn');
  langSwitchBtn?.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(newLang);
  });

  // Apply default language on load
  applyLanguage(currentLang);

  // --------------------------------------------------
  // 2. Preloader Logic
  // --------------------------------------------------
  const preloader = document.getElementById('preloader');
  const loaderBar = document.querySelector('.loader-bar');
  
  if (preloader && loaderBar) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 25) + 15;
      if (progress >= 100) {
        progress = 100;
        loaderBar.style.width = `${progress}%`;
        clearInterval(interval);
        setTimeout(() => {
          preloader.classList.add('loaded');
          if (typeof AOS !== 'undefined') {
            AOS.init({
              duration: 850,
              once: true,
              easing: 'ease-out-cubic',
              offset: 60
            });
          }
          // Trigger achievement bars after page loads
          setTimeout(() => {
            document.querySelectorAll('.achievement-fill').forEach(bar => bar.classList.add('run'));
          }, 600);
        }, 400);
      } else {
        loaderBar.style.width = `${progress}%`;
      }
    }, 120);
  }

  // --------------------------------------------------
  // 3. Navbar Scroll Behavior
  // --------------------------------------------------
  const navbar = document.getElementById('main-navbar');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('glass-nav', 'py-3');
      navbar?.classList.remove('py-5');
      backToTopBtn?.classList.add('show');
    } else {
      navbar?.classList.remove('glass-nav');
      navbar?.classList.add('py-5');
      navbar?.classList.remove('py-3');
      backToTopBtn?.classList.remove('show');
    }

    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 130;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-link'));
        navLink?.classList.add('active-link');
      }
    });
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });

  // --------------------------------------------------
  // 4. Animated Stats Counters
  // --------------------------------------------------
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  const startCounters = () => {
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;

    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos && !animated) {
      animated = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.innerText = target;
            clearInterval(timer);
          } else {
            counter.innerText = Math.ceil(current);
          }
        }, stepTime);
      });
    }
  };

  window.addEventListener('scroll', startCounters);

  // --------------------------------------------------
  // 5. Portfolio Filter System
  // --------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Hide cards marked to be excluded from the "All" view (only 6 shown)
  projectCards.forEach(card => {
    if (card.getAttribute('data-all') === 'hidden') {
      card.style.display = 'none';
      card.style.opacity = '0';
    }
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const showInAll = card.getAttribute('data-all') !== 'hidden';
        if ((filterValue === 'all' && showInAll) || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --------------------------------------------------
  // 6. Swiper Sliders Setup
  // --------------------------------------------------
  if (typeof Swiper !== 'undefined') {
    testimonialsSwiper = new Swiper('.testimonials-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // --------------------------------------------------
  // 7. Modals System & Lightbox
  // --------------------------------------------------
  const quoteModal = document.getElementById('quoteModal');
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtns = document.querySelectorAll('.close-modal');
  const quoteTriggers = document.querySelectorAll('.open-quote-modal');
  const projectTriggers = document.querySelectorAll('.open-project-modal');

  quoteTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      quoteModal?.classList.add('active');
    });
  });

  projectTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.project-card');
      if (card) {
        const tr = translations[currentLang] || {};
        const getT = (keyAttr, fallback) => {
          const key = card.getAttribute(keyAttr);
          return (key && tr[key]) || fallback;
        };
        const title = getT('data-title-key', card.getAttribute('data-title') || (currentLang === 'en' ? 'Architectural Project' : 'مشروع هندسي مميز'));
        const location = getT('data-location-key', card.getAttribute('data-location') || (currentLang === 'en' ? 'Kuwait' : 'الكويت'));
        const area = card.getAttribute('data-area') || '1,500 m²';
        const type = getT('data-type-key', card.getAttribute('data-type') || (currentLang === 'en' ? 'Building Construction' : 'إنشاءات معماري'));
        const desc = getT('data-desc-key', card.getAttribute('data-desc') || (currentLang === 'en' ? 'Integrated construction project executed according to the highest global standards.' : 'مشروع متكامل تم تنفيذه بأعلى معايير الجودة والدقة الهندسية وفق الجدول الزمني المحدد.'));
        const imgSrc = card.querySelector('img')?.getAttribute('src');

        document.getElementById('modalProjectTitle').innerText = title;
        document.getElementById('modalProjectLocation').innerText = location;
        document.getElementById('modalProjectArea').innerText = area;
        document.getElementById('modalProjectType').innerText = type;
        document.getElementById('modalProjectDesc').innerText = desc;
        if (imgSrc) {
          document.getElementById('modalProjectImg').setAttribute('src', imgSrc);
        }

        projectModal?.classList.add('active');
      }
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quoteModal?.classList.remove('active');
      projectModal?.classList.remove('active');
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === quoteModal) quoteModal.classList.remove('active');
    if (e.target === projectModal) projectModal.classList.remove('active');
  });

  // --------------------------------------------------
  // 8. Form Handlers & Toast Notification
  // --------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const quoteForm = document.getElementById('quoteForm');

  const showToast = (messageKey) => {
    const msg = translations[currentLang][messageKey] || messageKey;
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-[#D4AF37] text-black px-6 py-4 rounded-xl shadow-2xl z-[999999] flex items-center gap-3 font-bold animate-bounce';
    toast.innerHTML = `<i class="fas fa-check-circle text-2xl"></i> <span>${msg}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 4000);
  };

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('toast_contact_msg');
    contactForm.reset();
  });

  quoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    quoteModal?.classList.remove('active');
    showToast('toast_quote_msg');
    quoteForm.reset();
  });
});
