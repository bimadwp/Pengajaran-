
import React from 'react';
import { Topic, ExerciseType } from './types';
import { BookIcon, SpeechBubbleIcon, BalanceIcon } from './components/icons';

export const TOPICS: Topic[] = [
  {
    id: 'giving-opinion',
    title: 'Giving Opinion',
    description: 'Pelajari cara memberikan pendapat dalam Bahasa Inggris dengan percaya diri.',
    illustration: <SpeechBubbleIcon className="w-16 h-16 text-white" />,
    color: 'bg-sky-500',
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
        type: 'phrases',
        title: 'Ungkapan Umum',
        items: [
          { en: 'I think...', id: 'Menurut saya...' },
          { en: 'In my opinion...', id: 'Menurut pendapat saya...' },
          { en: 'I believe that...', id: 'Saya percaya bahwa...' },
          { en: 'From my point of view...', id: 'Dari sudut pandang saya...' },
          { en: 'As far as I am concerned...', id: 'Sejauh yang saya tahu...' },
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
        type: 'exercise',
        title: 'Mini Quiz',
        exerciseType: ExerciseType.MULTIPLE_CHOICE,
        data: {
          instruction: 'Pilih ungkapan yang paling tepat untuk menyatakan pendapat pada setiap situasi.',
          questions: [
            {
              question: 'Kamu ingin memberikan pendapat tentang makanan di kantin. Kamu memulai dengan...',
              options: ['I think the food is delicious.', 'What is the food?', 'I am eating.'],
              answer: 'I think the food is delicious.',
            },
            {
              question: 'Guru bertanya pendapatmu tentang PR. Kamu menjawab:',
              options: ['I don\'t know.', 'In my opinion, the homework is quite challenging.', 'When is the deadline?'],
              answer: 'In my opinion, the homework is quite challenging.',
            },
            {
              question: 'Ungkapan yang lebih formal untuk memberikan pendapat adalah...',
              options: ['I feel...', 'From my point of view...', 'I guess...'],
              answer: 'From my point of view...',
            },
          ],
        },
      },
      {
        type: 'exercise',
        title: 'Latihan: Susun Percakapan',
        exerciseType: ExerciseType.DRAG_AND_DROP,
        data: {
          instruction: 'Susun kalimat berikut menjadi percakapan yang logis dengan cara drag & drop.',
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
    color: 'bg-amber-500',
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
            },
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
            { statement: '"Let me explain why..." adalah ungkapan untuk memulai argumen.', isTrue: true },
            { statement: '"I disagree" adalah ungkapan yang tidak sopan dan harus dihindari.', isTrue: false },
            { statement: 'Defending opinion berarti kamu harus memaksakan pendapatmu kepada orang lain.', isTrue: false },
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
    color: 'bg-emerald-500',
    sections: [
      {
        type: 'explanation',
        title: 'Struktur Teks "Analytical Exposition"',
        content: [
          'Teks ini bertujuan untuk meyakinkan pembaca bahwa sesuatu itu penting atau perlu diperhatikan.',
          'Strukturnya terdiri dari tiga bagian utama:',
          '1. Thesis: Memperkenalkan topik dan sudut pandang penulis.',
          '2. Arguments: Menyajikan argumen-argumen yang mendukung thesis, biasanya disertai dengan bukti atau contoh.',
          '3. Reiteration: Menyatakan kembali sudut pandang penulis sebagai kesimpulan.',
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
          instruction: 'Jawab pertanyaan berikut berdasarkan teks "The Importance of Breakfast".',
          questions: [
            {
              question: 'What is the main idea of the text?',
              options: [
                'How to cook breakfast.',
                'The benefits of breakfast for students.',
                'Different types of breakfast food.'
              ],
              answer: 'The benefits of breakfast for students.',
            },
            {
              question: 'The part that introduces the topic and writer\'s view is called...',
              options: ['Argument', 'Reiteration', 'Thesis'],
              answer: 'Thesis',
            },
             {
              question: 'What is the purpose of the text?',
              options: [
                'To entertain the reader.',
                'To describe what breakfast is.',
                'To persuade the reader that breakfast is important.'
              ],
              answer: 'To persuade the reader that breakfast is important.',
            },
          ],
        },
      },
    ],
  },
];
