import React from 'react';
import { Topic, ExerciseType, Flashcard } from './types';
import { BookIcon, SpeechBubbleIcon, BalanceIcon, PencilIcon, CardsIcon } from './components/icons';

export const FLASHCARD_DATA: Flashcard[] = [
  { word: 'Opinion', type: 'noun', translation: 'Pendapat', example: 'In my opinion, this is a great idea.' },
  { word: 'Believe', type: 'verb', translation: 'Percaya', example: 'I believe we can achieve our goals.' },
  { word: 'Agree', type: 'verb', translation: 'Setuju', example: 'I agree with your point of view.' },
  { word: 'Disagree', type: 'verb', translation: 'Tidak Setuju', example: 'I disagree because the data shows otherwise.' },
  { word: 'Argue', type: 'verb', translation: 'Beralasan/Mendebat', example: 'He argued that the plan was too risky.' },
  { word: 'Reason', type: 'noun', translation: 'Alasan', example: 'The reason I believe that is...' },
  { word: 'Evidence', type: 'noun', translation: 'Bukti', example: 'You need to provide evidence for your claims.' },
  { word: 'Convince', type: 'verb', translation: 'Meyakinkan', example: 'She convinced me to join the team.' },
  { word: 'Persuade', type: 'verb', translation: 'Membujuk', example: 'The goal is to persuade the reader.' },
  { word: 'Thesis', type: 'noun', translation: 'Tesis', example: 'The thesis statement is in the first paragraph.' },
  { word: 'Argument', type: 'noun', translation: 'Argumen', example: 'She presented a strong argument.' },
  { word: 'Reiteration', type: 'noun', translation: 'Penegasan Ulang', example: 'The reiteration summarizes the main points.' },
  { word: 'Crucial', type: 'adjective', translation: 'Sangat Penting', example: 'It is crucial to submit the report on time.' },
  { word: 'Important', type: 'adjective', translation: 'Penting', example: 'Wearing a uniform is important.' },
  { word: 'Beneficial', type: 'adjective', translation: 'Bermanfaat', example: 'Regular exercise is beneficial for your health.' },
  { word: 'Consequently', type: 'adverb', translation: 'Akibatnya', example: 'He was late; consequently, he missed the meeting.' },
  { word: 'Furthermore', type: 'adverb', translation: 'Selanjutnya/Selain itu', example: 'Furthermore, we need to consider the budget.' },
  { word: 'However', type: 'adverb', translation: 'Akan tetapi', example: 'I see your point; however, I have a different opinion.' },
  { word: 'Undoubtedly', type: 'adverb', translation: 'Tidak diragukan lagi', example: 'She is undoubtedly the best candidate.' },
  { word: 'Perspective', type: 'noun', translation: 'Sudut Pandang', example: 'From my perspective, the project is on track.' },
  { word: 'Viewpoint', type: 'noun', translation: 'Sudut Pandang', example: 'Let me share my viewpoint on this matter.' },
  { word: 'Claim', type: 'noun', translation: 'Klaim/Tuntutan', example: 'Her claim was supported by strong evidence.' },
  { word: 'Justification', type: 'noun', translation: 'Pembenaran/Justifikasi', example: 'What is your justification for this decision?' },
  { word: 'Therefore', type: 'adverb', translation: 'Oleh karena itu', example: 'He studied hard; therefore, he passed the exam.' },
  { word: 'To state', type: 'verb', translation: 'Menyatakan', example: 'Please state your name and address.' },
  { word: 'To support', type: 'verb', translation: 'Mendukung', example: 'You must support your arguments with facts.' },
  { word: 'Valid', type: 'adjective', translation: 'Sah/Valid', example: 'That is a valid point you have made.' },
  { word: 'Coherent', type: 'adjective', translation: 'Koheren/Masuk Akal', example: 'He proposed a coherent plan for the project.' },
  { word: 'On the other hand', type: 'phrase', translation: 'Di sisi lain', example: 'The job is interesting. On the other hand, the salary is low.' },
  { word: 'To summarize', type: 'verb', translation: 'Meringkas', example: 'To summarize, we need to act quickly.' },
];

export const TOPICS: Topic[] = [
  {
    id: 'giving-opinion',
    title: 'Giving Opinion',
    description: 'Pelajari cara memberikan pendapat dalam Bahasa Inggris dengan percaya diri.',
    illustration: <SpeechBubbleIcon className="w-16 h-16 text-white" />,
    color: 'bg-gradient-to-br from-sky-500 to-cyan-400',
    sections: [
      {
        type: 'explanation',
        title: 'Apa itu "Giving Opinion"?',
        content: [
          '"Giving Opinion" adalah ungkapan yang digunakan untuk menyatakan pandangan, perasaan, atau keyakinan seseorang tentang suatu hal.',
          'Ini adalah bagian penting dalam percakapan sehari-hari, diskusi, dan bahkan dalam menulis.',
          'Menggunakan ungkapan yang tepat membuat pendapat kita lebih jelas dan sopan.',
        ],
      },
      {
        type: 'explanation',
        title: 'Asking for Opinion',
        content: [
            'Sebelum memberikan pendapat, seringkali kita perlu bertanya terlebih dahulu. Ini menunjukkan bahwa kita menghargai pandangan orang lain.',
            'Beberapa cara umum untuk meminta pendapat:',
        ],
      },
      {
        type: 'phrases',
        title: 'Ungkapan Meminta Pendapat',
        items: [
          { en: 'What do you think about...?', id: 'Apa pendapatmu tentang...?' },
          { en: 'How do you feel about...?', id: 'Bagaimana perasaanmu tentang...?' },
          { en: 'What\'s your view on...?', id: 'Apa pandanganmu mengenai...?' },
          { en: 'Do you have any thoughts on...?', id: 'Apakah kamu punya pemikiran tentang...?' },
        ],
      },
      {
        type: 'explanation',
        title: 'Tingkatan Kekuatan Opini',
        content: [
            'Tidak semua pendapat diungkapkan dengan tingkat keyakinan yang sama. Mengenali perbedaannya akan membantumu berkomunikasi lebih efektif.',
            '1. Strong Opinion (Pendapat Kuat): Digunakan saat kamu sangat yakin dengan pandanganmu. Contoh: "I am convinced that...", "I strongly believe...".',
            '2. Neutral/General Opinion (Pendapat Netral): Ini adalah cara paling umum dan standar untuk memberi pendapat. Contoh: "I think...", "In my opinion...".',
            '3. Tentative Opinion (Pendapat Hati-hati): Digunakan saat kamu tidak sepenuhnya yakin atau ingin terdengar lebih sopan dan tidak memaksa. Contoh: "I tend to think...", "It seems to me that...".',
        ],
      },
      {
        type: 'phrases',
        title: 'Ungkapan Memberi Pendapat',
        items: [
          { en: 'I think...', id: '(Netral) Menurut saya...' },
          { en: 'In my opinion...', id: '(Netral) Menurut pendapat saya...' },
          { en: 'I strongly believe that...', id: '(Kuat) Saya sangat percaya bahwa...' },
          { en: 'I\'m absolutely convinced that...', id: '(Kuat) Saya sangat yakin bahwa...' },
          { en: 'It seems to me that...', id: '(Hati-hati) Sepertinya bagi saya...' },
          { en: 'As far as I am concerned...', id: '(Netral) Sejauh yang saya tahu...' },
        ],
      },
      {
        type: 'dialogue',
        title: 'Contoh Percakapan',
        intro: 'Dengarkan percakapan antara Rina dan Budi tentang film yang baru mereka tonton.',
        lines: [
          { speaker: 'Rina', text: 'Hey Budi, what do you think about the new superhero movie?' },
          { speaker: 'Budi', text: 'Oh, in my opinion, it was amazing! The special effects were incredible.' },
          { speaker: 'Rina', text: 'I agree with you on the special effects, but I think the story was a bit predictable.' },
          { speaker: 'Budi', text: 'Really? From my point of view, the story had some interesting twists.' },
        ],
      },
      {
        type: 'explanation',
        title: 'Tips Penting',
        content: [
          '1. Berikan Alasan: Jangan hanya mengatakan "I think it\'s good." Jelaskan MENGAPA kamu berpikir begitu. "I think it\'s good because...".',
          '2. Hargai Pendapat Lain: Gunakan frasa seperti "I see your point, but..." untuk menunjukkan bahwa kamu mendengarkan, bahkan jika kamu tidak setuju.',
          '3. Sesuaikan dengan Konteks: Gunakan ungkapan formal (e.g., "From my point of view...") dalam situasi resmi dan ungkapan informal (e.g., "I reckon...") dengan teman.',
        ],
      },
      {
        type: 'exercise',
        title: 'Kuis Kekuatan Opini',
        exerciseType: ExerciseType.MULTIPLE_CHOICE,
        data: {
          instruction: 'Pilih tingkatan opini yang paling sesuai untuk setiap kalimat.',
          questions: [
            {
              question: 'Kalimat "I am absolutely certain that this is the best solution." menunjukkan...',
              options: ['Strong Opinion', 'Neutral Opinion', 'Tentative Opinion'],
              answer: 'Strong Opinion',
              explanation: 'Kalimat ini menggunakan frasa "absolutely certain" yang menunjukkan keyakinan penuh, ciri dari Strong Opinion.',
            },
            {
              question: 'Jika kamu tidak terlalu yakin dan ingin terdengar sopan, kamu bisa berkata...',
              options: ['"Without a doubt,..."', '"I might be wrong, but I feel..."', '"It is a fact that..."'],
              answer: '"I might be wrong, but I feel..."',
              explanation: 'Frasa "I might be wrong, but..." menunjukkan keraguan atau kehati-hatian, yang merupakan ciri dari Tentative Opinion.',
            },
            {
              question: '"In my opinion, the movie was quite entertaining." adalah contoh dari...',
              options: ['Strong Opinion', 'Neutral Opinion', 'Asking for Opinion'],
              answer: 'Neutral Opinion',
              explanation: '"In my opinion" adalah cara standar dan netral untuk menyampaikan pendapat tanpa penekanan kuat atau keraguan.',
            },
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Latihan: Formal atau Informal?',
        exerciseType: ExerciseType.TRUE_FALSE,
        data: {
          instruction: 'Tentukan apakah penggunaan ungkapan berikut cocok untuk situasi formal atau informal.',
          statements: [
            { statement: 'Ungkapan "I reckon..." cocok digunakan saat presentasi bisnis.', isTrue: false, explanation: 'Ungkapan "I reckon..." sangat informal dan lebih cocok digunakan dalam percakapan santai dengan teman, bukan dalam situasi bisnis formal.' },
            { statement: '"From my point of view..." adalah ungkapan yang baik untuk situasi formal.', isTrue: true, explanation: 'Frasa ini adalah cara yang sopan dan umum digunakan untuk memberikan pendapat dalam konteks formal seperti rapat atau presentasi.' },
            { statement: 'Mengatakan "If you ask me..." lebih cocok saat berbicara dengan teman.', isTrue: true, explanation: 'Ini adalah ungkapan informal yang pas digunakan saat memberikan pendapat kepada teman atau dalam suasana santai.' },
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Latihan: Susun Percakapan',
        exerciseType: ExerciseType.ORDERING,
        data: {
          instruction: 'Susun kalimat berikut menjadi percakapan yang logis dengan cara mengklik kalimat sesuai urutannya.',
          correctOrder: [
            'Anna: What do you think about studying from home?',
            'Ben: I believe it has its pros and cons.',
            'Anna: I agree. In my opinion, it offers more flexibility.',
            'Ben: That\'s true, but I think it\'s harder to stay focused.',
          ],
          scrambled: [
            'Anna: I agree. In my opinion, it offers more flexibility.',
            'Ben: That\'s true, but I think it\'s harder to stay focused.',
            'Anna: What do you think about studying from home?',
            'Ben: I believe it has its pros and cons.',
          ],
        },
      },
    ],
  },
  {
    id: 'defending-opinion',
    title: 'Defending Opinion',
    description: 'Kuatkan argumenmu dan pelajari cara mempertahankan pendapat secara efektif.',
    illustration: <BalanceIcon className="w-16 h-16 text-white" />,
    color: 'bg-gradient-to-br from-amber-500 to-orange-400',
    sections: [
       {
        type: 'explanation',
        title: 'Apa itu "Defending Opinion"?',
        content: [
          '"Defending Opinion" adalah cara untuk memberikan alasan atau bukti untuk mendukung pendapat yang telah kamu sampaikan.',
          'Ini penting saat orang lain tidak setuju atau mempertanyakan pandanganmu. Tujuannya bukan untuk berdebat, tetapi untuk menjelaskan pemikiranmu.',
          'Dengan mempertahankan pendapat, kamu menunjukkan bahwa pandanganmu didasarkan pada alasan yang kuat.',
        ],
      },
      {
        type: 'phrases',
        title: 'Ungkapan Umum',
        items: [
          { en: 'I see your point, but...', id: 'Saya mengerti maksudmu, tapi...' },
          { en: 'Let me explain why I think so.', id: 'Biar saya jelaskan mengapa saya berpikir begitu.' },
          { en: 'I disagree because...', id: 'Saya tidak setuju karena...' },
          { en: 'The reason I believe that is...', id: 'Alasan saya percaya itu adalah...' },
        ],
      },
      {
        type: 'explanation',
        title: 'Strategi Mempertahankan Pendapat',
        content: [
          'Agar argumenmu lebih kuat dan meyakinkan, gunakan strategi berikut:',
          '1. Berikan Bukti (Providing Evidence): Dukung pendapatmu dengan fakta, contoh nyata, atau data. Ini membuat argumenmu lebih dari sekadar perasaan. Contoh: "Saya percaya game edukatif itu bermanfaat. The reason is, sebuah studi menunjukkan bahwa game tersebut dapat meningkatkan skor siswa sebesar 15%."',
          '2. Akui Pendapat Lawan (Concession): Tunjukkan bahwa kamu memahami sudut pandang orang lain sebelum menyanggahnya. Ini membuatmu terlihat lebih bijaksana dan terbuka. Contoh: "I see your point that some games can be distracting, but on the other hand, many are designed specifically for learning."',
          '3. Gunakan Sanggahan (Counterargument): Antisipasi argumen yang mungkin dilontarkan lawan bicaramu dan berikan bantahan terlebih dahulu. Contoh: "You might say that uniforms stifle creativity. However, I believe they help students focus on what truly matters at school: education."',
        ],
      },
       {
        type: 'phrases',
        title: 'Ungkapan Lanjutan',
        items: [
          { en: 'I understand what you\'re saying, however...', id: 'Saya paham maksudmu, akan tetapi...' },
          { en: 'That\'s a valid point, but...', id: 'Itu poin yang valid, tapi...' },
          { en: 'Let me provide an example.', id: 'Biar saya berikan contoh.' },
          { en: 'Statistically speaking...', id: 'Secara statistik...' },
          { en: 'While it is true that..., I still believe...', id: 'Meskipun benar bahwa..., saya tetap percaya...' },
        ],
      },
      {
        type: 'dialogue',
        title: 'Contoh Debat Ringan',
        intro: 'Simak percakapan antara Doni dan Sinta yang memiliki pendapat berbeda tentang game.',
        lines: [
          { speaker: 'Doni', text: 'I think video games are a waste of time.' },
          { speaker: 'Sinta', text: 'I see your point, but I have a different view. From my perspective, many games can improve problem-solving skills.' },
          { speaker: 'Doni', text: 'How so? It just looks like entertainment.' },
          { speaker: 'Sinta', text: 'Let me explain. Strategy games, for example, require you to think ahead and manage resources. The reason I believe that is because I\'ve seen improvements in my own planning skills.' },
        ],
      },
      {
        type: 'dialogue',
        title: 'Contoh Debat Lanjutan',
        intro: 'Perhatikan bagaimana Rina menggunakan strategi argumen saat berdiskusi dengan Budi tentang penggunaan smartphone di sekolah.',
        lines: [
          { speaker: 'Budi', text: 'In my opinion, smartphones should be completely banned in schools. They are a major distraction.' },
          { speaker: 'Rina', text: 'I understand what you\'re saying about distractions. That\'s a valid point. However, I think a complete ban is not the best solution.' },
          { speaker: 'Budi', text: 'Why not? Students just use them for social media and games.' },
          { speaker: 'Rina', text: 'While it\'s true that some students might misuse them, I still believe smartphones can be powerful learning tools. For example, we can use them to quickly look up information or use educational apps. Statistically speaking, interactive learning on devices can increase engagement.' },
        ],
      },
      {
        type: 'exercise',
        title: 'Latihan Pilihan Ganda',
        exerciseType: ExerciseType.MULTIPLE_CHOICE,
        data: {
          instruction: 'Pilih tanggapan yang paling sesuai untuk mempertahankan pendapat.',
          questions: [
            {
              question: 'Temanmu bilang: "I think public transportation is inefficient." Kamu tidak setuju dan ingin mempertahankan pendapatmu. Kamu bilang...',
              options: [
                'You are wrong.',
                'I disagree because it reduces traffic and pollution.',
                'I don\'t use public transportation.'
              ],
              answer: 'I disagree because it reduces traffic and pollution.',
              explanation: 'Jawaban ini efektif karena langsung menyatakan ketidaksetujuan ("I disagree") dan langsung memberikan alasan logis ("because it reduces traffic..."), yang merupakan inti dari mempertahankan pendapat.',
            },
             {
              question: 'Seseorang berkata, "Homework should be banned." Kamu setuju sebagian. Respon terbaik adalah...',
              options: [
                'That\'s a terrible idea.',
                'I see your point, but I think some homework is necessary for practice.',
                'I completely agree, homework is useless.'
              ],
              answer: 'I see your point, but I think some homework is necessary for practice.',
              explanation: 'Ini adalah respons terbaik karena menggunakan strategi konsesi ("I see your point...") yang mengakui pendapat lawan sebelum memberikan argumen tandingan ("...but I think some is necessary..."). Ini menunjukkan sikap yang bijaksana.',
            },
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Kuis Strategi Argumen',
        exerciseType: ExerciseType.MULTIPLE_CHOICE,
        data: {
          instruction: 'Identifikasi strategi yang digunakan dalam setiap kalimat.',
          questions: [
            {
              question: 'Kalimat: "While I agree that social media can be addictive, it\'s also a great tool for connecting with family." Strategi apa yang digunakan?',
              options: [
                'Providing Evidence',
                'Concession (Mengakui Poin Lawan)',
                'Counterargument'
              ],
              answer: 'Concession (Mengakui Poin Lawan)',
              explanation: 'Dengan mengatakan "While I agree...", pembicara mengakui validitas sebagian dari argumen lawan sebelum memberikan sudut pandang yang berbeda. Ini adalah ciri khas strategi konsesi.',
            },
             {
              question: 'Kalimat: "According to a 2023 survey, 70% of employees prefer a hybrid work model." Strategi apa ini?',
              options: [
                'Providing Evidence (Memberikan Bukti)',
                'Concession',
                'General Opinion'
              ],
              answer: 'Providing Evidence (Memberikan Bukti)',
              explanation: 'Menyebutkan sumber spesifik seperti survei atau statistik adalah cara langsung untuk memberikan bukti (evidence) yang mendukung argumen.',
            },
            {
              question: 'Ketika kamu berkata "Let me explain my reasoning...", kamu sedang bersiap untuk...',
              options: [
                'Menyetujui pendapat lawan',
                'Memberikan alasan pendukung untuk opinimu',
                'Mengubah topik pembicaraan'
              ],
              answer: 'Memberikan alasan pendukung untuk opinimu',
              explanation: 'Frasa ini secara eksplisit memberi sinyal bahwa pembicara akan menguraikan alasan-alasan di balik pendapatnya untuk memperkuat argumen.',
            },
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Latihan: Menyusun Argumen',
        exerciseType: ExerciseType.ORDERING,
        data: {
          instruction: 'Susun kalimat-kalimat berikut menjadi sebuah argumen yang sopan dan terstruktur.',
          correctOrder: [
            'Person A: I think online classes are much better than offline classes.',
            'You: I understand why you think that, especially the flexibility.',
            'You: However, I believe that offline classes allow for better interaction with teachers.',
            'You: The reason is we can ask questions directly and get immediate feedback.',
          ],
          scrambled: [
            'You: The reason is we can ask questions directly and get immediate feedback.',
            'You: However, I believe that offline classes allow for better interaction with teachers.',
            'Person A: I think online classes are much better than offline classes.',
            'You: I understand why you think that, especially the flexibility.',
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Kuis Benar atau Salah',
        exerciseType: ExerciseType.TRUE_FALSE,
        data: {
          instruction: 'Tentukan apakah pernyataan berikut Benar (True) atau Salah (False) berdasarkan pemahamanmu.',
          statements: [
            { statement: '"Let me explain why..." adalah ungkapan untuk memulai argumen.', isTrue: true, explanation: 'Frasa ini adalah pembuka yang jelas untuk mulai menjelaskan alasan di balik pendapat Anda, yang merupakan dasar dari sebuah argumen.' },
            { statement: '"I disagree" adalah ungkapan yang tidak sopan dan harus dihindari.', isTrue: false, explanation: 'Meskipun langsung, "I disagree" tidak selalu tidak sopan, terutama jika diikuti dengan alasan yang jelas dan disampaikan dengan nada yang hormat. Ini adalah cara yang lugas untuk menyatakan perbedaan pendapat.' },
            { statement: 'Defending opinion berarti kamu harus memaksakan pendapatmu kepada orang lain.', isTrue: false, explanation: 'Tujuan mempertahankan pendapat adalah untuk menjelaskan pemikiran Anda dengan alasan yang kuat, bukan untuk memaksa orang lain setuju. Tujuannya adalah klarifikasi dan persuasi, bukan paksaan.' },
          ],
        },
      },
    ],
  },
  {
    id: 'analytical-exposition',
    title: 'Analytical Exposition',
    description: 'Pahami cara menyusun teks argumentatif untuk meyakinkan pembaca.',
    illustration: <BookIcon className="w-16 h-16 text-white" />,
    color: 'bg-gradient-to-br from-emerald-500 to-green-400',
    sections: [
      {
        type: 'explanation',
        title: 'Apa itu Teks "Analytical Exposition"?',
        content: [
          'Analytical Exposition adalah jenis teks yang menyajikan sudut pandang penulis mengenai suatu isu. Tujuannya (social function) adalah untuk meyakinkan pembaca atau pendengar bahwa topik yang dibahas itu penting dan patut menjadi perhatian.',
          'Teks ini tidak bertujuan untuk mengubah pandangan pembaca, tetapi lebih untuk membuat pembaca sadar akan suatu isu dan setuju dengan argumen yang disajikan penulis.',
          'Strukturnya terdiri dari tiga bagian utama: Thesis, Arguments, dan Reiteration.',
        ],
      },
      {
        type: 'explanation',
        title: 'Struktur Teks',
        content: [
          '1. Thesis: Bagian ini memperkenalkan topik utama dan menyatakan posisi atau sudut pandang penulis. Thesis biasanya berada di paragraf pertama dan memberikan gambaran umum tentang apa yang akan dibahas.',
          '2. Arguments (Argumen): Bagian ini berisi serangkaian argumen yang mendukung thesis. Setiap argumen biasanya disajikan dalam paragraf terpisah, dimulai dengan ide pokok dan diikuti oleh data, fakta, atau contoh sebagai pendukung. Semakin kuat argumennya, semakin besar kemungkinan pembaca akan yakin.',
          '3. Reiteration (Penegasan Ulang): Ini adalah bagian kesimpulan. Penulis menyatakan kembali thesis dengan kalimat yang berbeda untuk menekankan kembali sudut pandangnya. Bagian ini merangkum argumen-argumen yang telah disajikan sebelumnya.',
        ],
      },
      {
        type: 'explanation',
        title: 'Ciri Kebahasaan (Language Features)',
        content: [
          'Teks Analytical Exposition memiliki ciri kebahasaan yang khas:',
          '- Menggunakan Simple Present Tense: Karena membahas fakta atau kebenaran umum. Contoh: "Regular exercise strengthens the heart."',
          '- Menggunakan kata-kata yang mengekspresikan pikiran atau perasaan penulis (emotive words): Contoh: "important", "crucial", "wrong", "I believe...", "I feel...".',
          '- Menggunakan Internal Conjunctions: Kata hubung yang menghubungkan argumen di dalam teks. Contoh: "Firstly...", "Secondly...", "In addition...", "Furthermore...".',
          '- Menggunakan Causal Conjunctions: Kata hubung yang menunjukkan sebab-akibat. Contoh: "because", "due to", "consequently", "as a result".',
        ],
      },
      {
        type: 'explanation',
        title: 'Perbedaan dengan Hortatory Exposition',
        content: [
          'Seringkali, Analytical Exposition disamakan dengan Hortatory Exposition. Keduanya memang teks argumentatif, tapi tujuannya berbeda.',
          '1. Analytical Exposition: Tujuannya adalah untuk meyakinkan pembaca bahwa suatu isu itu penting (to persuade the reader that something is the case). Teks ini diakhiri dengan Reiteration (penegasan ulang), yang hanya merangkum kembali argumen tanpa ajakan bertindak.',
          '2. Hortatory Exposition: Tujuannya adalah untuk meyakinkan pembaca agar melakukan atau tidak melakukan sesuatu (to persuade the reader to do or not to do something). Teks ini diakhiri dengan Recommendation (rekomendasi), yang berisi saran atau ajakan konkret. Contoh: "Therefore, students should start...", "We must...", "It is recommended that...".',
          'Singkatnya: Analytical = "Ini lho, isunya penting." | Hortatory = "Ini isunya, ayo lakukan sesuatu!"',
        ],
      },
       {
        type: 'explanation',
        title: 'Tips Menulis Teks yang Kuat',
        content: [
          'Ikuti tips berikut untuk membuat teks Analytical Exposition yang meyakinkan:',
          '1. Thesis yang Jelas: Pastikan kalimat thesis-mu langsung menyatakan posisimu dengan tegas. Hindari kalimat yang ambigu. Contoh lemah: "Maybe recycling is good." Contoh kuat: "Recycling is undoubtedly a crucial habit everyone must adopt to save our planet."',
          '2. Kembangkan Argumen dengan PEEL: Gunakan metode PEEL untuk setiap paragraf argumen:',
          '   - P (Point): Sebutkan ide utama paragrafmu.',
          '   - E (Evidence): Berikan bukti, data, atau contoh untuk mendukung idemu.',
          '   - E (Explanation): Jelaskan bagaimana buktimu mendukung ide utamamu.',
          '   - L (Link): Kaitkan kembali argumenmu dengan thesis utama.',
          '3. Reiteration yang Efektif: Jangan hanya menyalin thesis-mu. Gunakan sinonim dan struktur kalimat yang berbeda untuk merangkum poin-poin utamamu dan meninggalkan kesan yang kuat pada pembaca.',
        ],
      },
       {
        type: 'explanation',
        title: 'Contoh Teks Lengkap',
        content: [
          'Berikut adalah contoh teks Analytical Exposition lengkap dengan strukturnya.',
          'Judul: The Importance of Wearing a School Uniform',
          '(Thesis) In my opinion, wearing a school uniform is very important and offers many benefits for students. It creates a sense of equality, reduces social pressure, and allows students to focus more on their studies rather than their appearance.',
          '(Argument 1) Firstly, school uniforms promote equality among students. When everyone wears the same clothes, differences in economic background become less obvious. This can reduce feelings of jealousy and prevent bullying related to fashion choices.',
          '(Argument 2) Secondly, it helps students focus on learning. Without the daily pressure of deciding what to wear, students can concentrate better on their academic performance. This creates a more serious and focused learning environment.',
          '(Reiteration) In conclusion, it is clear that school uniforms are beneficial. They play a crucial role in fostering equality and creating a better environment for education.',
        ],
      },
      {
        type: 'exercise',
        title: 'Latihan: Tandai Struktur Teks',
        exerciseType: ExerciseType.HIGHLIGHT_TEXT,
        data: {
          instruction: 'Klik tombol struktur (Thesis, Argument, Reiteration) lalu klik pada bagian teks yang sesuai untuk menandainya.',
          text: 'The Importance of Breakfast. (Thesis) Having breakfast is crucial for students. A good breakfast provides the necessary energy for the day\'s activities. (Argument) Firstly, it improves concentration in class. Studies show that students who eat breakfast perform better academically. (Argument) Secondly, it helps maintain a healthy metabolism. Skipping breakfast can lead to overeating later in the day. (Reiteration) In conclusion, eating breakfast every day is essential for students to enhance their learning and maintain their health.',
          parts: [
            { text: 'Having breakfast is crucial for students. A good breakfast provides the necessary energy for the day\'s activities.', type: 'thesis' },
            { text: 'Firstly, it improves concentration in class. Studies show that students who eat breakfast perform better academically.', type: 'argument' },
            { text: 'Secondly, it helps maintain a healthy metabolism. Skipping breakfast can lead to overeating later in the day.', type: 'argument' },
            { text: 'In conclusion, eating breakfast every day is essential for students to enhance their learning and maintain their health.', type: 'reiteration' },
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Kuis Pemahaman Teks',
        exerciseType: ExerciseType.MULTIPLE_CHOICE,
        data: {
          instruction: 'Jawab pertanyaan berikut berdasarkan pemahamanmu tentang Analytical Exposition.',
          questions: [
            {
              question: 'What is the main purpose of an Analytical Exposition text?',
              options: [
                'To tell a story from the past.',
                'To describe how something is done.',
                'To persuade the reader about a certain point of view.'
              ],
              answer: 'To persuade the reader about a certain point of view.',
              explanation: 'Tujuan utama (social function) dari Analytical Exposition adalah untuk meyakinkan pembaca tentang sudut pandang penulis terhadap suatu isu, membuatnya terlihat penting.',
            },
            {
              question: 'The part that introduces the topic and writer\'s view is called...',
              options: ['Argument', 'Reiteration', 'Thesis'],
              answer: 'Thesis',
              explanation: 'Thesis adalah bagian pembuka yang memperkenalkan topik dan menyatakan posisi atau sudut pandang penulis yang akan didukung oleh argumen.',
            },
             {
              question: 'Which of the following is NOT a typical language feature of this text?',
              options: [
                'Using Simple Past Tense to narrate events.',
                'Using words like "Firstly" and "In addition".',
                'Using Simple Present Tense.'
              ],
              answer: 'Using Simple Past Tense to narrate events.',
              explanation: 'Analytical Exposition membahas fakta dan kebenaran umum, sehingga menggunakan Simple Present Tense. Simple Past Tense digunakan untuk narasi atau menceritakan kejadian masa lalu.',
            },
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Kuis: Analytical vs. Hortatory',
        exerciseType: ExerciseType.MULTIPLE_CHOICE,
        data: {
          instruction: 'Tentukan apakah kalimat atau tujuan berikut merujuk pada Analytical atau Hortatory Exposition.',
          questions: [
            {
              question: 'Sebuah teks diakhiri dengan kalimat: "Therefore, the government should invest more in public libraries." Jenis teks apakah ini?',
              options: [
                'Analytical Exposition',
                'Hortatory Exposition',
                'Narration'
              ],
              answer: 'Hortatory Exposition',
              explanation: 'Kalimat ini memberikan sebuah rekomendasi atau ajakan untuk bertindak ("should invest"), yang merupakan ciri khas dari Hortatory Exposition, bukan Analytical.',
            },
             {
              question: 'Tujuan utama sebuah teks adalah untuk membuat pembaca sadar akan bahaya merokok tanpa menyuruh mereka berhenti. Teks ini adalah...',
              options: [
                'Analytical Exposition',
                'Hortatory Exposition',
                'Description'
              ],
              answer: 'Analytical Exposition',
              explanation: 'Tujuan teks ini adalah meyakinkan pembaca bahwa isunya penting (to persuade that something is the case), tanpa ada ajakan bertindak. Ini adalah tujuan dari Analytical Exposition.',
            },
            {
              question: 'Bagian terakhir dari teks Hortatory Exposition disebut...',
              options: [
                'Reiteration',
                'Recommendation',
                'Conclusion'
              ],
              answer: 'Recommendation',
              explanation: 'Hortatory Exposition diakhiri dengan Recommendation yang berisi saran atau ajakan, sedangkan Analytical Exposition diakhiri dengan Reiteration (penegasan ulang).',
            },
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Kuis Lanjutan: Ciri & Struktur',
        exerciseType: ExerciseType.MULTIPLE_CHOICE,
        data: {
          instruction: 'Pilih jawaban yang paling tepat mengenai ciri-ciri dan struktur teks Analytical Exposition.',
          questions: [
            {
              question: 'Mengapa teks Analytical Exposition sering menggunakan Simple Present Tense?',
              options: [
                'Untuk menceritakan peristiwa masa lalu.',
                'Karena membahas fakta umum dan kebenaran yang berlaku saat ini.',
                'Agar terdengar lebih puitis.'
              ],
              answer: 'Karena membahas fakta umum dan kebenaran yang berlaku saat ini.',
              explanation: 'Simple Present Tense digunakan karena teks ini membahas kebenaran umum, fakta, dan opini yang berlaku secara umum pada saat ini, bukan kejadian spesifik di masa lalu.',
            },
            {
              question: 'Apa fungsi dari "Internal Conjunctions" seperti "Furthermore" atau "In addition"?',
              options: ['Untuk menunjukkan sebab-akibat.', 'Untuk menghubungkan ide antar argumen agar mengalir.', 'Untuk mengakhiri sebuah teks.'],
              answer: 'Untuk menghubungkan ide antar argumen agar mengalir.',
              explanation: 'Kata-kata ini adalah "internal conjunctions" yang berfungsi untuk menghubungkan argumen-argumen secara logis dan membuat teks lebih kohesif dan mengalir dengan baik.',
            },
             {
              question: 'Bagian "Reiteration" seharusnya...',
              options: [
                'Memperkenalkan argumen baru yang belum dibahas.',
                'Menyatakan kembali Thesis dengan kata-kata yang berbeda.',
                'Memberikan contoh-contoh detail.'
              ],
              answer: 'Menyatakan kembali Thesis dengan kata-kata yang berbeda.',
              explanation: 'Fungsi Reiteration adalah untuk merangkum dan menegaskan kembali Thesis dan poin-poin utama dengan kata-kata yang berbeda, memberikan kesimpulan yang kuat tanpa memperkenalkan ide baru.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'flashcards',
    featureType: 'flashcards',
    title: 'Flashcards Kosakata',
    description: 'Hafalkan kosakata kunci dari semua materi dengan kartu interaktif.',
    illustration: <CardsIcon className="w-16 h-16 text-white" />,
    color: 'bg-gradient-to-br from-rose-500 to-pink-400',
  },
  {
    id: 'final-exam',
    title: 'Ujian Akhir',
    description: 'Uji pemahamanmu tentang semua materi yang telah dipelajari dalam satu kuis komprehensif.',
    illustration: <PencilIcon className="w-16 h-16 text-white" />,
    color: 'bg-gradient-to-br from-indigo-500 to-purple-400',
    sections: [
      {
        type: 'explanation',
        title: 'Selamat Datang di Ujian Akhir!',
        content: [
          'Anda telah mempelajari cara memberikan pendapat, mempertahankannya dengan argumen yang kuat, serta menganalisis dan menyusun teks eksposisi.',
          'Kini saatnya untuk menguji pemahaman Anda secara menyeluruh.',
          'Kuis ini akan menggabungkan pertanyaan dari ketiga topik tersebut. Kerjakan dengan teliti dan semoga berhasil!',
        ],
      },
      {
        type: 'exercise',
        title: 'Kuis Komprehensif',
        exerciseType: ExerciseType.MULTIPLE_CHOICE,
        data: {
          instruction: 'Pilih jawaban yang paling tepat untuk setiap pertanyaan.',
          questions: [
            {
              question: 'Manakah dari kalimat berikut yang menunjukkan "Strong Opinion"?',
              options: [
                'It seems to me that the project is good.',
                'I think the project is acceptable.',
                'I am absolutely convinced that this is the best project.'
              ],
              answer: 'I am absolutely convinced that this is the best project.',
              explanation: 'Frasa "absolutely convinced" menunjukkan tingkat keyakinan yang sangat tinggi, yang merupakan ciri khas dari sebuah "Strong Opinion".',
            },
            {
              question: 'Temanmu berkata, "I think homework is a waste of time." Cara terbaik untuk menyanggah secara sopan adalah...',
              options: [
                'That\'s a wrong opinion.',
                'I see your point, but I believe it helps us practice the material.',
                'You just don\'t want to study.'
              ],
              answer: 'I see your point, but I believe it helps us practice the material.',
              explanation: 'Ini adalah cara yang paling sopan karena menggunakan strategi konsesi, yaitu mengakui pendapat lawan sebelum memberikan argumen tandingan, sehingga diskusi menjadi lebih konstruktif.',
            },
            {
              question: 'Dalam struktur teks Analytical Exposition, bagian yang berisi argumen dan bukti pendukung disebut...',
              options: ['Thesis', 'Arguments', 'Reiteration'],
              answer: 'Arguments',
              explanation: 'Struktur teks Analytical Exposition terdiri dari Thesis (posisi penulis), Arguments (bukti dan penjelasan), dan Reiteration (kesimpulan). Bagian argumen adalah inti dari teks.',
            },
            {
              question: 'Sebuah teks diakhiri dengan kalimat: "In conclusion, online learning is a valuable tool for modern education." Ini adalah bagian...',
              options: ['Recommendation', 'Thesis', 'Reiteration'],
              answer: 'Reiteration',
              explanation: 'Kalimat ini menyimpulkan dan menegaskan kembali posisi penulis (thesis) di akhir teks, yang merupakan fungsi dari bagian Reiteration dalam Analytical Exposition.',
            },
            {
              question: 'Kata hubung seperti "Firstly", "In addition", dan "Furthermore" dalam teks argumentatif berfungsi untuk...',
              options: [
                  'Menunjukkan sebab-akibat.',
                  'Menghubungkan dan mengurutkan argumen secara logis.',
                  'Menyatakan kesimpulan akhir.'
              ],
              answer: 'Menghubungkan dan mengurutkan argumen secara logis.',
              explanation: 'Ini adalah "internal conjunctions" yang digunakan untuk mengurutkan dan menghubungkan berbagai argumen, membuat alur tulisan menjadi jelas dan terstruktur.',
            },
            {
              question: 'Apa tujuan utama dari teks Hortatory Exposition?',
              options: [
                'Meyakinkan pembaca bahwa suatu isu itu penting.',
                'Menceritakan sebuah kisah.',
                'Meyakinkan pembaca untuk melakukan atau tidak melakukan sesuatu.'
              ],
              answer: 'Meyakinkan pembaca untuk melakukan atau tidak melakukan sesuatu.',
              explanation: 'Berbeda dari Analytical Exposition yang hanya meyakinkan tentang pentingnya suatu isu, Hortatory Exposition secara aktif bertujuan untuk mendorong pembaca agar mengambil tindakan tertentu.',
            },
          ],
        },
      },
    ],
  },
];