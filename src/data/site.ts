// All page copy lives here; HTML strings are rendered as-is.

// Prefix a root path with the deploy base.
export const u = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;

export const profile = {
  name: 'Kevin Li (Yu-Teng)',
  shortName: 'Kevin Li',
  title: 'Senior Applied Research Scientist, Adobe Research',
  photo: u('/images/portrait-2026.webp'),
  photoBackup: u('/images/portrait-backup.webp'),
  photoCaption: '(Denoising trajectory with Euler sampler)',
  bio: [
    'I work across the training stack of image and video foundation models for Adobe Firefly, from training recipe and architecture to data mixtures and curation.',
    'I previously co-led the multimodal pretraining of <strong>Firefly Image 5</strong> production run, which released at MAX 2025 as the first Adobe model that can perform 2K image generation, editing and layerized editing. My more recent work has been on the <strong>next-generation image/video omni model</strong> of Adobe, focusing on pretraining data and recipe. Aside from production work, I publish exploratory research at venues like NeurIPS, ICLR, CVPR and ICML.',
    'Prior to joining Adobe, I studied EECS at UC Berkeley, where I did research on active learning for autonomous driving in <a href="https://darrellgroup.github.io">Trevor Darrell</a>’s lab, and TA’ed at CS182 Deep Learning for two semesters.',
  ],
  links: [
    { label: 'Email', href: 'mailto:yutengli@berkeley.edu' },
    { label: 'CV', href: u('/data/resume_oct_2026.pdf') },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=wpm4Sz0AAAAJ&hl=en' },
    { label: 'X', href: 'https://x.com/curiouskid423' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yutengli/' },
    { label: 'GitHub', href: 'https://github.com/thekevinli' },
  ],
};

export const nav = [
  { label: 'Industry', href: u('/#industry') },
  { label: 'Research', href: u('/#research') },
  { label: 'Blogs', href: u('/#blogs') },
  { label: 'Berkeley', href: u('/#berkeley') },
];

// video: a muted looping clip that plays like a GIF; src is its poster frame.
type Media = { src: string; alt: string; fit?: 'cover' | 'contain'; position?: string; ratio?: string; video?: string };

export type Entry = {
  when: string;
  title: string;
  href?: string;
  authors?: string;
  subtitle?: string;
  body: string[];
  bullets?: string[];
  after?: string;
  afterList?: string[];
  note?: string;
  highlight?: string;
  links?: { label: string; href: string }[];
  media?: Media;
  groups?: { title: string; body: string[]; media?: Media; diagram?: 'clip' }[];
};

const MAX26 = 'https://blog.adobe.com/en/publish/2026/11/10/explore-new-ways-create-across-creative-cloud-adobe-firefly-while-advancing-craft-precision-choice-control';
const PS_AUG26 = 'https://blog.adobe.com/en/publish/2026/08/27/new-photoshop-innovations-bring-you-more-choice-control-at-every-stage-of-your-creative-process';

export const industry: Entry[] = [
  {
    when: '2026 to present',
    title: 'Firefly next-generation image/video omni model',
    body: [],
    groups: [
      {
        title: 'Led multi-reference editing workstream',
        body: [
          'Delivered the production recipe, including the data, rewriter tuning, and training curriculum in tandem with single-ref data, as many types of multi-ref edits emerge as “chained single-ref edit” turns. Recipe shipped into Firefly Foundry – custom models for enterprises and film studios.',
          'Designed ablations on VLM conditioning architectures for better prompt following, and activation analysis tool that guided fixes to expert collapse in MoE models for imaging tasks.',
        ],
        media: { src: u('/images/moe-stealth.webp'), alt: 'Image and video tokens routed to two of eight experts in a Mixture-of-Experts model, its internals veiled', ratio: '16 / 10' },
      },
      {
        title: 'Video pretraining data',
        body: [
          'Built petabyte-scale video curation for pretraining, turning raw video into billions of multi-shot audio-video clips. Designed a shot detection pipeline tuned per video category by an autoresearch harness against a human-labeled gold set, and transcript-aware multi-shot clip packing that minimizes speech interruptions mid-sentence.',
        ],
        diagram: 'clip',
      },
    ],
    after: 'The same model powers several features shipped at Adobe MAX 2026, including:',
    afterList: [
      `<a href="${MAX26}">Relight</a> in Photoshop`,
      `<a href="${MAX26}">Generative Remove</a> in Premiere`,
    ],
  },
  {
    when: 'October 2025',
    title: 'Firefly Image 5',
    href: 'https://news.adobe.com/news/2025/10/adobe-max-2025-firefly',
    body: [
      'Co-led multimodal pretraining and trained the production run of a model for 4MP text-to-image, instruction editing and layered generation. I designed the data curriculum and task balancing, ran caption and architecture ablations, fixed loss instabilities and drove the final recipe on 1,000+ GPUs. <a href="https://x.com/curiouskid423/status/1983229813906420009">[read more]</a>',
    ],
    note: `It also powers <a href="${PS_AUG26}">Instruct Edit with Masks</a> in Photoshop.`,
    media: { src: u('/images/firefly5-layered-poster.webp'), video: u('/images/firefly5-layered.mp4') + '?v=2', alt: 'Firefly Image 5 editing a photo of a noodle bowl: selecting objects as layers and editing them with prompts', fit: 'cover', ratio: '16 / 9' },
  },
  {
    when: 'April 2025',
    title: 'Firefly Image 4',
    href: 'https://blog.adobe.com/en/publish/2025/04/24/adobe-firefly-next-evolution-creative-ai-is-here',
    body: [
      'Led aesthetic fine-tuning; the recipe was demoed at Adobe MAX. <br>In pretraining, I added a timestep curriculum that routes synthetic data to high-noise steps, widening concept coverage without inheriting over-saturation. <a href="https://blog.adobe.com/en/publish/2025/04/24/adobe-firefly-next-evolution-creative-ai-is-here">[read more]</a>',
    ],
    media: { src: u('/images/firefly4-max.webp'), alt: 'Firefly Image 4 generations on stage at the Adobe MAX launch: a freckled portrait, a chameleon, and a portrait with flowers in her hair', fit: 'cover', ratio: '16 / 10' },
  },
  {
    when: 'August 2024',
    title: 'Firefly Image 3 Custom Models',
    href: 'https://helpx.adobe.com/firefly/web/work-with-enterprise-features/train-custom-models/custom-models-overview.html',
    body: [
      'Led personalization end to end, from the training recipe to the production fine-tuning pipeline behind Custom Models for enterprise customers. Before that, I built a training-free style transfer, inversion with weighted cross-attention, to synthesize paired editing data. <a href="https://helpx.adobe.com/firefly/web/work-with-enterprise-features/train-custom-models/custom-models-overview.html">[read more]</a>',
    ],
    media: { src: u('/images/firefly3.webp'), alt: 'The Firefly Custom Models library', fit: 'cover', position: 'top left', ratio: '16 / 10' },
  },
];

const me = '<strong>Yu-Teng Li</strong>';
const a = (name: string, href: string) => `<a href="${href}">${name}</a>`;

export const research: Entry[] = [
  {
    when: 'ICLR 2026 Workshop',
    title: 'UniFusion: Vision-Language Model as Unified Encoder in Image Generation and Editing',
    authors: `${me}, ${a('Manuel Brack', 'https://x.com/MBrack_AIML')}, ${a('Sudeep Katakol', 'https://sudeepkatakol.github.io/')}, ${a('Hareesh Ravi', 'https://hareesh-ravi.github.io/')}, ${a('Ajinkya Kale', 'https://x.com/ajinkyakale')}`,
    body: [
      'UniFusion challenges the premise that semantic embeddings are insufficient for pixel generation tasks, and is the first architecture that uses only VLM as unified semantic encoder without inputs from VAE or CLIP to do editing. The unified encoder framework enables competitive generation and editing that rivals Flux.1[dev] and Bagel, with emergent capabilities such as zero-shot multi-ref generation when trained on single-ref pairs.',
    ],
    highlight: '<strong>Krea 2</strong>, one of the leading open-source image generative models, adopted UniFusion architecture in its text fusion module.',
    links: [
      { label: 'Project page', href: 'https://thekevinli.github.io/unifusion/' },
      { label: 'Camera-ready', href: 'https://openreview.net/forum?id=V9l4tDFYjf' },
      { label: 'ArXiv', href: 'https://arxiv.org/abs/2510.12789' },
      { label: 'Krea 2 report', href: 'https://www.krea.ai/blog/krea-2-technical-report#text-encoder' },
      { label: 'Krea2 code', href: 'https://github.com/krea-ai/krea-2/blob/main/mmdit.py#L251-L290' },
    ],
    media: { src: u('/images/unifusion-layerwise.gif'), alt: 'Animation: a sofa image and an edit instruction pass through a frozen VLM; features from 4 tapped layers are pooled by layerwise attention, refined by two bidirectional blocks, and condition a diffusion transformer that produces the edited image', ratio: '960 / 620' },
  },
  {
    when: 'NeurIPS 2026',
    title: 'Squeezing Capacity from Multimodal Large Language Models for Subject-driven Generation',
    authors: `${a('Shuhong Zheng', 'https://zsh2000.github.io/')}, ${me}*, Aashish Kumar Misraa*, ${a('Yu-Jhe Li', 'https://yujheli.github.io/')}*, ${a('Igor Gilitschenski', 'https://www.gilitschenski.org/igor/')}`,
    body: [
      'Conditioning diffusion models on MLLMs that jointly encode text and images better harmonizes identities in subject-driven generation, and achieves superior identity preservation than previous arts. We introduced Dual Layer Aggregation (DLA) module to fuse multi-layer MLLM features and a multi-stage denoising strategy that balances MLLM semantics with details from VAE.',
    ],
    links: [{ label: 'ArXiv', href: 'https://arxiv.org/abs/2605.26111' }],
    media: { src: u('/images/subject.webp'), alt: 'Subject-driven results compared with a VAE-based baseline', fit: 'contain', ratio: '764 / 513' },
  },
  {
    when: 'CVPR 2026',
    title: 'Towards Text-Guided Attribute-Disentangled Multimodal Representation Learning',
    authors: `${a('Yibing Wei', 'https://yibingwei-1.github.io')}, ${a('Sudeep Katakol', 'https://sudeepkatakol.github.io/')}, ${a('Manuel Brack', 'https://x.com/MBrack_AIML')}, Jinhong Lin, Haoyue Bai, ${me}, ${a('Richard Zhang', 'https://richzhang.github.io')}, ${a('Eli Shechtman', 'https://research.adobe.com/person/eli-shechtman/')}, ${a('Hareesh Ravi', 'https://hareesh-ravi.github.io/')}, ${a('Ajinkya Kale', 'https://x.com/ajinkyakale')}`,
    body: [
      'We formulated Queryable Attribute Representation Extraction (QARE) and introduced the first benchmark for attribute-disentangled multimodal embeddings. Proposed a training-free method that substantially outperforms SigLIP and contrastively-trained methods such as VLM2Vec, on attribute-conditioned retrieval.',
    ],
    links: [{ label: 'Camera-ready', href: 'https://openaccess.thecvf.com/content/CVPR2026F/papers/Wei_Towards_Text-Guided_Attribute-Disentangled_Multimodal_Representation_Learning_CVPRF_2026_paper.pdf' }],
    media: { src: u('/images/qare.webp'), alt: 'QARE pipeline: an attribute-focused prompt and image pass through LLM layers to a pooled embedding', fit: 'contain', ratio: '624 / 439' },
  },
  {
    when: 'ICML 2024',
    title: 'Hyperbolic Active Learning for Semantic Segmentation under Domain Shift',
    authors: `Luca Franco*, Paolo Mandica*, Konstantinos Kallidromitis, ${a('Devin Guillory', 'https://www.devinguillory.com')}, ${me}, ${a('Trevor Darrell', 'https://darrellgroup.github.io')}, Fabio Galasso`,
    body: [
      'HALO introduces a hyperbolic neural network approach to pixel-based active learning (AL) for semantic segmentation, and is the first AL method to surpass the performance of fully-supervised baseline on synthetic-to-real domain adaptation benchmarks such as GTAV → Cityscapes, with just 1% of labeled pixels.',
    ],
    links: [
      { label: 'ArXiv', href: 'https://arxiv.org/abs/2306.11180' },
      { label: 'GitHub', href: 'https://github.com/paolomandica/HALO' },
    ],
    media: { src: u('/images/halo.webp'), alt: 'HALO pipeline: hyperbolic segmentation drives which pixels get labeled', fit: 'contain', ratio: '1200 / 670' },
  },
];

export const researchFooter = {
  scholar: 'https://scholar.google.com/citations?user=wpm4Sz0AAAAJ&hl=en',
  reviewer: 'I have also served as a reviewer for CVPR, ECCV, NeurIPS and ICLR.',
};

export const education: Entry[] = [
  {
    when: 'Spring 2023',
    title: 'CS 182/282A Deep Neural Networks, UC Berkeley',
    href: 'https://inst.eecs.berkeley.edu/~cs182/sp23/',
    subtitle: 'Head Teaching Assistant of Discussions',
    body: [
      `I <a href="${u('/images/cs182_course_staff.png')}">led the curriculum design</a> of weekly discussion sections in the Deep Learning course at UC Berkeley, with 300+ graduate &amp; undergraduate students in Spring 2023. I also designed various exam and homework questions on denoising diffusion models (DDPM), Transformers, and more.`,
    ],
    media: { src: u('/images/cs182.webp'), alt: 'CS 182/282A Deep Neural Networks, Spring 2023 course page', fit: 'cover', ratio: '1130 / 712' },
  },
  {
    when: 'Fall 2022',
    title: 'Neighboring State-based Exploration for Reinforcement Learning',
    authors: `${me}, Justin Lin, Jeffery Cheng, ${a('Pedro Pachuca', 'https://x.com/PedroPachuca4')}`,
    body: [
      'ρ-explore surveys a bounded region of nearby states early in training, borrowing from adversarial-attack work, and beats a Double DQN baseline by 49% in reward on discrete environments.',
    ],
    links: [
      { label: 'ArXiv', href: 'https://arxiv.org/abs/2212.10712' },
      { label: 'Code', href: 'https://github.com/thekevinli/rho_exploration' },
    ],
    media: { src: u('/images/rho-explore.gif'), alt: 'An agent landing in the Lunar Lander environment', fit: 'cover', ratio: '3 / 2' },
  },
];

// A slug links to src/content/blogs/<slug>.md once that post is published.
export const blogList: { title: string; description: string; cover: string; slug?: string }[] = [
  { cover: u('/images/covers/delphi-1.svg'), title: 'Delphi [part 1]: Designing a self-improving memory harness', description: 'A memory harness for reading papers, and the eval that let agents improve it.', slug: 'delphi-part-1' },
  { cover: u('/images/covers/delphi-2.svg'), title: 'Delphi [part 2]: Personal research assistant', description: 'Proactive memory, a research watchlist, and whether dreaming helps.' },
  { cover: u('/images/covers/delphi-3.svg'), title: 'Delphi [part 3]: Remember and manage my experiments', description: 'Memory that tracks your ablations, so you stop re-briefing agents.' },
  { cover: u('/images/covers/adobe-3y.svg'), title: 'Three years on Adobe’s foundation model team', description: 'From an undergrad hire with no compute to co-leading a production pretraining run.' },
  { cover: u('/images/covers/scaling.svg'), title: 'How small is too small? Primer to automating scaling study for image and video diffusion models', description: 'The smallest image and video proxy runs whose decisions still hold at scale.' },
];
