export const languages = ['en', 'zh'] as const;
export type Lang = (typeof languages)[number];
export type Localized = Record<Lang, string>;

export const profile = {
	name: 'Shiuan-Ting (Jeremy) Lin',
	shortName: 'Jeremy Lin',
	location: { en: 'Taipei, Taiwan', zh: '台灣台北' },
	email: 'h16488860904@gmail.com',
	github: 'https://github.com/Jeremylin0904',
	linkedin: 'https://www.linkedin.com/in/jeremy-lin-b7460821a/',
	cv: '/Shiuan-Ting-Lin-CV.pdf',
};

export const ui = {
	en: {
		langName: 'EN',
		skip: 'Skip to content',
		nav: {
			home: 'Home',
			about: 'About',
			research: 'Research',
			projects: 'Projects',
			cv: 'CV',
			contact: 'Contact',
		},
		menu: 'Menu',
		close: 'Close',
		switchLanguage: '切換至繁體中文',
		viewProject: 'Explore project',
		viewAll: 'View all projects',
		viewCv: 'View CV',
		downloadCv: 'Download PDF',
		emailMe: 'Email me',
		current: 'Current',
		footerNote: 'Built with care in Taipei.',
	},
	zh: {
		langName: '中',
		skip: '跳至主要內容',
		nav: {
			home: '首頁',
			about: '關於我',
			research: '研究',
			projects: '專案',
			cv: '履歷',
			contact: '聯絡',
		},
		menu: '選單',
		close: '關閉',
		switchLanguage: 'Switch to English',
		viewProject: '深入了解',
		viewAll: '查看所有專案',
		viewCv: '查看履歷',
		downloadCv: '下載 PDF',
		emailMe: '寄信給我',
		current: '至今',
		footerNote: '在台北細心製作。',
	},
} as const;

export const home = {
	en: {
		eyebrow: 'Statistical learning · Explainable AI · Representation learning',
		summary:
			'I am a Solution Architect at Nokia with a foundation in mathematics and statistics. My work spans trustworthy machine learning, spatial representation analysis, and AI systems for network operations—with a growing interest in self-supervised and predictive representation learning, world models, and embodied intelligence.',
		primaryCta: 'Explore my research',
		secondaryCta: 'About me',
		selected: 'Selected research',
		selectedIntro:
			'Two thesis projects shaped the way I approach machine learning: preserve meaningful structure, and make model behavior understandable.',
		approachTitle: 'A statistical lens on learning systems',
		approachBody:
			'I move between statistical reasoning, representation learning, and real-world AI systems. Across each setting, I care about what information a model retains, how reliably it generalizes, and whether its decisions can be inspected.',
		threads: [
			['Structure', 'Learning representations that preserve spatial and temporal relationships.'],
			['Interpretability', 'Turning opaque predictions into faithful, human-readable explanations.'],
			['Systems', 'Testing learning methods against the constraints of operational environments.'],
		],
		nextTitle: 'From explanation toward prediction',
		nextBody:
			'My current research interests extend this foundation toward self-supervised video understanding, predictive representations, and world models.',
	},
	zh: {
		eyebrow: '統計學習 · 可解釋人工智慧 · 表徵學習',
		summary:
			'我目前是 Nokia 的 Solution Architect，具備數學與統計背景。過去的工作橫跨可信賴機器學習、空間表徵分析，以及網路維運 AI 系統；目前進一步關注自監督與預測式表徵學習、世界模型及具身智慧。',
		primaryCta: '探索我的研究',
		secondaryCta: '關於我',
		selected: '精選研究',
		selectedIntro:
			'兩項論文研究塑造了我看待機器學習的方式：保留有意義的結構，並讓模型行為能被理解。',
		approachTitle: '用統計視角理解學習系統',
		approachBody:
			'我的工作橫跨統計推理、表徵學習與真實世界的 AI 系統。在每個場景中，我關心模型保留了哪些資訊、能否可靠泛化，以及決策是否可被檢視。',
		threads: [
			['結構', '學習能保留空間與時間關係的表徵。'],
			['可解釋性', '將不透明的預測轉化為忠實、可讀的解釋。'],
			['系統', '在真實營運環境的限制下驗證學習方法。'],
		],
		nextTitle: '從解釋走向預測',
		nextBody:
			'目前，我希望將這些基礎延伸至自監督影片理解、預測式表徵與世界模型。',
	},
} as const;

export const about = {
	en: {
		eyebrow: 'About',
		bio: [
			'I work at the intersection of statistics, machine learning, and network systems. At Nokia, I turn operational network problems into testable AI systems, with a focus on AIOps, telemetry, and trustworthy automation.',
			'My path from spatial representation learning to explainable AI now shapes my interest in self-supervised learning and world models: how systems can learn useful structure from complex, changing environments.',
		],
	},
	zh: {
		eyebrow: '關於我',
		bio: [
			'我的工作位於統計、機器學習與網路系統的交會處。目前在 Nokia，我將網路維運問題轉化為可驗證的 AI 系統，聚焦於 AIOps、遙測資料與可信賴自動化。',
			'從空間表徵學習到可解釋 AI 的研究歷程，進一步形塑了我對自監督學習與世界模型的興趣：系統如何從複雜且持續變動的環境中學到有用結構。',
		],
	},
} as const;

export const research = {
	en: {
		eyebrow: 'Research',
		title: 'Learning useful structure—and understanding what a model learned.',
		intro:
			'My research path began with sparse statistical representations, moved into explainable machine learning, and now points toward self-supervised and predictive learning.',
		thesisTitle: 'Thesis research',
		threadsTitle: 'Research threads',
		threads: [
			{
				number: '01',
				title: 'Structured representation learning',
				body: 'How can inductive biases such as convolution help sparse latent representations preserve local spatial relationships? My statistics thesis explored this question through simulation and climate data.',
				tags: ['Sparse PCA', 'Autoencoders', 'Convolution', 'Spatial data'],
			},
			{
				number: '02',
				title: 'Trustworthy & explainable AI',
				body: 'How can a black-box prediction be translated into a compact set of rules without losing fidelity? At Ericsson R&D, I developed and evaluated a post-hoc, model-agnostic rule extraction pipeline.',
				tags: ['Counterfactuals', 'Rule extraction', 'Fuzzy labeling', 'Fidelity'],
			},
			{
				number: '03',
				title: 'Self-supervised & predictive learning',
				body: 'I am interested in how models can discover correspondence and dynamics from unlabeled video, then use learned representations to anticipate future states rather than only reconstruct observations.',
				tags: ['Video understanding', 'Self-supervision', 'JEPA', 'World models'],
			},
		],
	},
	zh: {
		eyebrow: '研究',
		title: '學習有用的結構，也理解模型究竟學到了什麼。',
		intro:
			'我的研究從稀疏統計表徵出發，延伸至可解釋機器學習，並逐步走向自監督與預測式學習。',
		thesisTitle: '論文研究',
		threadsTitle: '研究脈絡',
		threads: [
			{
				number: '01',
				title: '結構化表徵學習',
				body: '卷積等歸納偏置，能否幫助稀疏潛在表徵保留局部空間關係？我的統計碩士論文透過模擬資料與氣候資料探討這個問題。',
				tags: ['稀疏 PCA', '自編碼器', '卷積', '空間資料'],
			},
			{
				number: '02',
				title: '可信賴與可解釋 AI',
				body: '如何將黑箱預測轉化為精簡規則，同時維持對原模型的忠實度？在 Ericsson R&D，我開發並評估了一套事後、模型無關的規則萃取流程。',
				tags: ['反事實樣本', '規則萃取', '模糊標記', '忠實度'],
			},
			{
				number: '03',
				title: '自監督與預測式學習',
				body: '我關注模型如何從未標註影片中發現對應關係與動態，並利用所學表徵預測未來狀態，而不只是重建觀測。',
				tags: ['影片理解', '自監督學習', 'JEPA', '世界模型'],
			},
		],
	},
} as const;

export type Project = {
	slug: string;
	year: string;
	featured: boolean;
	category: Localized;
	title: Localized;
	summary: Localized;
	detail: Localized;
	image: string;
	imageAlt: Localized;
	tags: string[];
	links: { label: Localized; url: string }[];
	accent: 'clay' | 'sage' | 'ink' | 'sand';
};

export const projects: Project[] = [
	{
		slug: 'spatial-sparse-pca',
		year: '2024',
		featured: true,
		category: { en: "Master's thesis · Statistics", zh: '碩士論文 · 統計學' },
		title: {
			en: 'Spatial Sparse PCA Using Autoencoders with Convolutions',
			zh: '以卷積自編碼器進行空間稀疏主成分分析',
		},
		summary: {
			en: 'Testing whether convolution can preserve local spatial structure in sparse learned representations.',
			zh: '探討卷積是否能在稀疏學習表徵中保留局部空間結構。',
		},
		detail: {
			en: 'Compared convolutional and non-convolutional sparse autoencoder variants with PCA and Sparse PCA across 1D linear, 2D linear, and nonlinear simulations, then applied the framework to equatorial Pacific sea-surface temperatures from 2003–2020.',
			zh: '在一維線性、二維線性與非線性模擬中，比較卷積及非卷積稀疏自編碼器與 PCA、Sparse PCA，並將方法應用於 2003–2020 年赤道太平洋海表溫度資料。',
		},
		image: '/images/projects/spatial-sparse-pca.jpg',
		imageAlt: {
			en: 'Sea-surface temperature loading vectors comparing PCA and SAE-C.',
			zh: 'PCA 與 SAE-C 的海表溫度負荷向量比較。',
		},
		tags: ['Python', 'Autoencoders', 'Sparse PCA', 'Simulation'],
		links: [
			{
				label: { en: 'Read thesis', zh: '閱讀論文' },
				url: 'https://thesis.lib.nycu.edu.tw/items/ad0b49d5-aaff-43a7-9e3f-25de1423e66f',
			},
			{
				label: { en: 'Code', zh: '程式碼' },
				url: 'https://github.com/Jeremylin0904/Spatial-Sparse-PCA-Using-Autoencoders-with-Convolutions',
			},
		],
		accent: 'clay',
	},
	{
		slug: 'explanation-analysis',
		year: '2024',
		featured: true,
		category: { en: "Master's thesis · Ericsson R&D", zh: '碩士論文 · Ericsson R&D' },
		title: { en: 'Explanation Analysis Using Rule Extraction', zh: '以規則萃取進行解釋分析' },
		summary: {
			en: 'Generating faithful, human-readable rules around black-box model predictions.',
			zh: '針對黑箱模型預測產生忠實且可讀的規則。',
		},
		detail: {
			en: 'Built a post-hoc explanation pipeline around telecom HTTP-delay prediction. The method generates counterfactual samples, estimates local probability distributions, applies fuzzy labeling, and extracts decision-tree rules evaluated by fidelity, hit rate, and complexity.',
			zh: '以電信 HTTP 延遲預測為情境，建立事後解釋流程：產生反事實樣本、估計局部機率分布、進行模糊標記，再萃取決策樹規則，並以忠實度、命中率與複雜度評估。',
		},
		image: '/images/projects/explanation-analysis.jpg',
		imageAlt: {
			en: 'Global fidelity results comparing DDT, ACFI, and the proposed method.',
			zh: 'DDT、ACFI 與本研究方法的全域忠實度比較結果。',
		},
		tags: ['Explainable AI', 'Counterfactuals', 'Decision Trees', 'Telecom'],
		links: [
			{
				label: { en: 'Read thesis', zh: '閱讀論文' },
				url: 'https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-356216',
			},
		],
		accent: 'sage',
	},
	{
		slug: 'sp500-quant-dashboard',
		year: '2026',
		featured: false,
		category: {
			en: 'Quantitative ML · Interactive dashboard',
			zh: '量化機器學習 · 互動儀表板',
		},
		title: { en: 'S&P 500 Quant ML Dashboard', zh: 'S&P 500 量化選股儀表板' },
		summary: {
			en: 'An end-to-end stock-selection pipeline with leakage-aware walk-forward validation, out-of-sample backtesting, and factor analysis.',
			zh: '整合無資料洩漏的 walk-forward 驗證、樣本外回測與因子分析之端到端量化選股流程。',
		},
		detail: {
			en: 'Ranks next-quarter outperformers from 40+ point-in-time fundamentals, converts Top-30 predictions into a monthly-rebalanced portfolio, and exposes methodology, holdings, performance, and factor attribution through a bilingual dashboard.',
			zh: '使用 40+ 項 point-in-time 基本面特徵預測下季相對強勢股票，將 Top-30 預測轉化為每月再平衡投資組合，並以雙語儀表板呈現方法、持股、績效與因子歸因。',
		},
		image: '/images/projects/sp500-quant-dashboard.jpg',
		imageAlt: {
			en: 'S&P 500 Quant Dashboard showing walk-forward periods and out-of-sample performance metrics.',
			zh: '顯示 walk-forward 期間與樣本外績效指標的 S&P 500 量化儀表板。',
		},
		tags: ['Python', 'React', 'AutoML', 'Walk-Forward'],
		links: [
			{
				label: { en: 'Live dashboard', zh: '線上儀表板' },
				url: 'https://jeremylin0904.github.io/sp500-quant-dashboard/',
			},
			{
				label: { en: 'Code', zh: '程式碼' },
				url: 'https://github.com/Jeremylin0904/sp500-quant-dashboard',
			},
		],
		accent: 'ink',
	},
	{
		slug: 'siammae',
		year: '2024',
		featured: false,
		category: { en: 'KTH course project', zh: 'KTH 課程專案' },
		title: { en: 'Siamese Masked Autoencoder Reproduction', zh: 'Siamese Masked Autoencoder 復現' },
		summary: {
			en: 'Self-supervised visual correspondence learning across temporally separated video frames.',
			zh: '透過時間分隔的影片畫面進行自監督視覺對應學習。',
		},
		detail: {
			en: 'Reproduced SiamMAE in PyTorch, pretrained on UCF-101, and inspected learned correspondence through DAVIS-2017 video object segmentation examples.',
			zh: '以 PyTorch 復現 SiamMAE，在 UCF-101 上進行預訓練，並透過 DAVIS-2017 影片物件分割範例檢視學到的對應關係。',
		},
		image: '/images/projects/siammae.jpg',
		imageAlt: {
			en: 'SiamMAE video object segmentation and motion correspondence results.',
			zh: 'SiamMAE 的影片物件分割與動態對應結果。',
		},
		tags: ['PyTorch', 'Self-Supervised Learning', 'Video', 'Transformers'],
		links: [
			{
				label: { en: 'Code', zh: '程式碼' },
				url: 'https://github.com/Jeremylin0904/SiamMAE_DeepLearning_final',
			},
		],
		accent: 'ink',
	},
	{
		slug: 'deep-learning-coursework',
		year: '2024',
		featured: false,
		category: { en: 'KTH coursework', zh: 'KTH 課程實作' },
		title: { en: 'Deep Learning Practical Assignments', zh: '進階深度學習實作' },
		summary: {
			en: 'Experiments in self-supervision, semi-supervision, model bias, and visual explanation.',
			zh: '涵蓋自監督、半監督、模型偏誤與視覺解釋的實驗。',
		},
		detail: {
			en: 'Implemented SimCLR, FixMatch, Grad-CAM, integrated gradients, memorization analysis, and layer criticality exercises for KTH’s advanced deep learning course.',
			zh: '於 KTH 進階深度學習課程中實作 SimCLR、FixMatch、Grad-CAM、Integrated Gradients、記憶化分析與 layer criticality。',
		},
		image: '/images/projects/deep-learning-coursework.jpg',
		imageAlt: {
			en: 'Grad-CAM explanation heatmaps over ImageNet predictions.',
			zh: 'ImageNet 預測結果上的 Grad-CAM 解釋熱圖。',
		},
		tags: ['PyTorch', 'SimCLR', 'FixMatch', 'Grad-CAM'],
		links: [
			{
				label: { en: 'Code', zh: '程式碼' },
				url: 'https://github.com/Jeremylin0904/DeepLearning-Advanced-Course',
			},
		],
		accent: 'sand',
	},
	{
		slug: 'taiwanese-food-classification',
		year: '2022',
		featured: false,
		category: { en: 'Computer vision application', zh: '電腦視覺應用' },
		title: { en: 'Taiwanese Food Classification App', zh: '台灣小吃影像分類應用' },
		summary: {
			en: 'An EfficientNetV2-based classifier for 101 Taiwanese food categories with Top-5 predictions and a user feedback loop.',
			zh: '以 EfficientNetV2 辨識 101 類台灣小吃，提供 Top-5 預測與使用者回饋修正流程。',
		},
		detail: {
			en: 'Combined transfer learning, web-crawled training data, an Anvil interface, and domain selection. Reported Top-5 accuracy was 69% on the Kaggle test set and 49.6% on the web-scraped test set.',
			zh: '結合遷移學習、網路爬取訓練資料、Anvil 介面與 domain selection；Kaggle 測試集 Top-5 準確率為 69%，網路爬取測試集為 49.6%。',
		},
		image: '/images/projects/taiwanese-food-classification.jpg',
		imageAlt: {
			en: 'Food classification interface showing an uploaded image and its Top-5 predicted Taiwanese dishes.',
			zh: '顯示上傳圖片與 Top-5 台灣小吃預測結果的分類介面。',
		},
		tags: ['TensorFlow', 'EfficientNetV2', 'Transfer Learning', 'Anvil'],
		links: [
			{
				label: { en: 'Code', zh: '程式碼' },
				url: 'https://github.com/Jeremylin0904/CV_Food-classification_Backend',
			},
			{
				label: { en: 'Demo video', zh: '展示影片' },
				url: 'https://youtu.be/DlKp4pPSPNw?t=458',
			},
		],
		accent: 'sage',
	},
	{
		slug: 'self-driving-robot',
		year: '2021',
		featured: false,
		category: { en: 'Computer vision project', zh: '電腦視覺專案' },
		title: { en: 'Camera-Based Self-Driving Robot', zh: '相機自駕機器人' },
		summary: {
			en: 'A vision-to-control lane-following pipeline for a ROS-based mobile robot.',
			zh: '為 ROS 行動機器人建立從視覺到控制的循線流程。',
		},
		detail: {
			en: 'Processed raw camera images with PyTorch and OpenCV to predict lane direction, then connected predictions to ROS motion control for real-time lane following.',
			zh: '使用 PyTorch 與 OpenCV 處理相機影像、預測車道方向，再將結果接入 ROS 運動控制，完成即時循線。',
		},
		image: '/images/projects/self-driving-robot.jpg',
		imageAlt: {
			en: 'Camera view of the self-driving robot following colored tracks.',
			zh: '自駕機器人沿著彩色軌道行進的相機畫面。',
		},
		tags: ['PyTorch', 'OpenCV', 'ROS', 'Computer Vision'],
		links: [
			{
				label: { en: 'Code', zh: '程式碼' },
				url: 'https://github.com/Jeremylin0904/CV_Self-Driving-Robot_Camera',
			},
			{
				label: { en: 'Demo', zh: '展示影片' },
				url: 'https://youtu.be/46JBglssC7o',
			},
		],
		accent: 'clay',
	},
];

export const experience = [
	{
		org: 'Nokia',
		logo: '/images/logos/nokia.svg',
		role: {
			en: 'Solution Architect, AIOps & Network AI',
			zh: 'Solution Architect，AIOps 與 Network AI',
		},
		period: { en: 'May 2026 — Present', zh: '2026 年 5 月 — 至今' },
		location: { en: 'Taipei, Taiwan', zh: '台灣台北' },
		points: {
			en: [
				'Bridge customer workflows and R&D for agentic, AI-assisted network management.',
				'Develop containerlab-based network digital twins for automation and troubleshooting validation.',
				'Work on real-time telemetry anomaly detection and interpretable router health monitoring.',
			],
			zh: [
				'在客戶維運流程與研發團隊間建立橋梁，定義並驗證代理式 AI 網路管理情境。',
				'開發以 containerlab 為基礎的網路數位分身，驗證自動化與故障排查流程。',
				'投入即時遙測異常偵測與可解釋的路由器健康監控。',
			],
		},
	},
	{
		org: 'Nokia',
		logo: '/images/logos/nokia.svg',
		role: {
			en: 'Network Engineer, AI/ML Systems Projects',
			zh: 'Network Engineer，AI/ML 系統專案',
		},
		period: { en: 'Nov 2024 — Apr 2026', zh: '2024 年 11 月 — 2026 年 4 月' },
		location: { en: 'Taipei, Taiwan', zh: '台灣台北' },
		points: {
			en: [
				'Built a RAG knowledge system over 15 long-form telecom sources, reducing typical lookup from 30–60 minutes to 10–30 seconds.',
				'Developed a capacity intelligence prototype over 5.93M observations, 16,482 4G cells, and 223 KPIs.',
			],
			zh: [
				'針對 15 份長篇電信資料建立 RAG 知識系統，將典型查找時間從 30–60 分鐘縮短至 10–30 秒。',
				'以 593 萬筆觀測、16,482 個 4G cells 與 223 項 KPI 開發容量智慧原型。',
			],
		},
	},
	{
		org: 'Ericsson',
		logo: '/images/logos/ericsson.svg',
		role: {
			en: 'Master Thesis Student, Trustworthy / Explainable AI',
			zh: '碩士論文研究生，可信賴／可解釋 AI',
		},
		period: { en: 'Jan 2024 — Jun 2024', zh: '2024 年 1 月 — 6 月' },
		location: { en: 'Stockholm, Sweden', zh: '瑞典斯德哥爾摩' },
		points: {
			en: [
				'Developed a model-agnostic rule extraction method for interpreting black-box predictions.',
				'Evaluated explanations by fidelity, generation hit rate, and rule complexity.',
			],
			zh: [
				'開發模型無關的規則萃取方法，解釋黑箱模型預測。',
				'以忠實度、解釋產生率與規則複雜度評估方法。',
			],
		},
	},
] as const;

export const education = [
	{
		school: 'National Yang Ming Chiao Tung University',
		logo: '/images/logos/nycu.svg',
		degree: { en: 'M.S. in Statistics · GPA 3.96 / 4.30', zh: '統計學碩士 · GPA 3.96 / 4.30' },
		period: '2021 — 2024',
	},
	{
		school: 'KTH Royal Institute of Technology',
		logo: '/images/logos/kth.svg',
		degree: {
			en: 'Exchange Program in Computer Science',
			zh: '資訊科學交換計畫',
		},
		period: '2023 — 2024',
	},
	{
		school: 'National Tsing Hua University',
		logo: '/images/logos/nthu.svg',
		degree: { en: 'B.S. in Mathematics', zh: '數學學士' },
		period: '2017 — 2021',
	},
] as const;

export const awards = [
	{
		title: {
			en: '2nd Place · Nokia MS Espresso AI Competition',
			zh: '第二名 · Nokia MS Espresso AI Competition',
		},
		year: '2026',
		note: {
			en: 'Capacity Intelligence prototype · 100+ participants',
			zh: 'Capacity Intelligence 原型 · 100+ 位參賽者',
		},
	},
	{
		title: {
			en: 'Gold Award · Intelligent Manufacturing Big Data Analytics',
			zh: '金獎 · 智慧製造大數據分析競賽',
		},
		year: '1st / ~200',
		note: {
			en: '1st place nationwide · approximately 200 teams',
			zh: '全國第一名 · 約 200 支隊伍',
		},
	},
	{
		title: {
			en: 'Honorable Mention · SinoPac AI GO Competition',
			zh: '佳作 · 永豐 AI GO 競賽',
		},
		year: 'Top 10 / 800+',
		note: {
			en: 'Top 10 of 800+ teams · private leaderboard F1 0.8825',
			zh: '800+ 隊中前十名 · private leaderboard F1 0.8825',
		},
	},
] as const;

export const skills = [
	{
		label: { en: 'Machine learning', zh: '機器學習' },
		items: 'PyTorch, TensorFlow, scikit-learn, XGBoost, Computer Vision, Self-Supervised Learning, Explainable AI',
	},
	{
		label: { en: 'Statistics', zh: '統計' },
		items: 'Statistical Modeling, Simulation, Regression, Time Series, Optimization, PCA, Cross-Validation',
	},
	{
		label: { en: 'AI systems', zh: 'AI 系統' },
		items: 'RAG, Agentic AI, MCP, LangChain, FastAPI, Docker',
	},
	{
		label: { en: 'Network systems', zh: '網路系統' },
		items: 'Containerlab, Network Automation, AIOps, Telemetry, Telecom Network Management',
	},
] as const;

export const pageCopy = {
	projects: {
		en: {
			eyebrow: 'Projects',
			title: 'Research and practical experiments.',
			intro: 'Selected implementations across representation learning and computer vision.',
			featured: 'Thesis research',
			archive: 'Selected projects',
		},
		zh: {
			eyebrow: '專案',
			title: '研究與實作。',
			intro: '精選表徵學習與電腦視覺領域的實作專案。',
			featured: '論文研究',
			archive: '精選專案',
		},
	},
	cv: {
		en: {
			eyebrow: 'Curriculum vitae',
			title: 'Experience across research and applied AI.',
			intro:
				'My path combines mathematical foundations, trustworthy machine learning research, and AI systems in telecom operations.',
			experience: 'Professional experience',
			education: 'Education',
			skills: 'Skills',
			download: 'Preview the two-page CV below, or open and download the PDF.',
		},
		zh: {
			eyebrow: '個人履歷',
			title: '橫跨研究與應用 AI 的經歷。',
			intro: '我的歷程結合數學基礎、可信賴機器學習研究，以及電信維運中的 AI 系統。',
			experience: '工作經歷',
			education: '學歷',
			skills: '技能',
			download: '在下方預覽兩頁履歷，或開啟、下載 PDF。',
		},
	},
	contact: {
		en: {
			eyebrow: 'Contact',
			title: 'Let’s exchange ideas.',
			intro:
				'For conversations about statistical learning, explainable AI, representation learning, or intelligent network systems, the best way to reach me is by email.',
			emailLabel: 'Email',
			elsewhere: 'Elsewhere',
			locationLabel: 'Based in',
			response: 'I usually respond within a few working days.',
		},
		zh: {
			eyebrow: '聯絡',
			title: '一起交流想法。',
			intro: '若想討論統計學習、可解釋 AI、表徵學習或智慧網路系統，歡迎透過 Email 與我聯絡。',
			emailLabel: 'Email',
			elsewhere: '其他平台',
			locationLabel: '所在地',
			response: '我通常會在幾個工作天內回覆。',
		},
	},
} as const;
