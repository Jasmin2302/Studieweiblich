// ---------- Screens & Navigation ----------

const screens = {
  home: document.getElementById('homeScreen'),
  select: document.getElementById('selectImageScreen'),
  caption: document.getElementById('captionScreen')
};

let selectedImage = null;

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function goToUpload() {
  showScreen('select');
}

function selectImage(img, src) {
  document
    .querySelectorAll('.gallery-grid img')
    .forEach(i => i.classList.remove('selected'));
  img.classList.add('selected');
  selectedImage = src;
  const mainPreview = document.getElementById('mainPreview');
  if (mainPreview) mainPreview.src = src;
}

function goToCaption() {
  if (!selectedImage) {
    alert('Bitte wähle ein Bild.');
    return;
  }
  const prev = document.getElementById('previewCaptionImage');
  if (prev) {
    prev.src = selectedImage;
    prev.style.display = 'block';
  }
  showScreen('caption');
}

// ---------- Hashtag-Buttons ----------

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('hashtag')) {
    const btn = e.target;
    const tag = btn.getAttribute('data-tag');
    toggleHashtag(tag, btn);
  }
});

function toggleHashtag(tag, btnEl) {
  const textarea = document.getElementById('caption');
  if (!textarea) return;

  const tokens = textarea.value.split(/\s+/).filter(Boolean);
  const idx = tokens.indexOf(tag);

  if (idx === -1) {
    tokens.push(tag);
    btnEl.classList.add('selected');
  } else {
    tokens.splice(idx, 1);
    btnEl.classList.remove('selected');
  }

  textarea.value = tokens.join(' ') + (tokens.length ? ' ' : '');
}

// ---------- 8 KONDITIONEN MIT EIGENEN KOMMENTAREN ----------

// Hilfsfunktion für 1,3k Darstellung
function formatLikes(num) {
  if (num >= 1000) return (num / 1000).toFixed(1).replace('.', ',') + 'k';
  return num.toString();
}

const CONDITIONS = [
  // 1) neutral, wenig Likes, Exklusion
  {
    id: "neutral_wenig_exklusion",
    style: "neutral",
    likesLevel: "wenig",
    social: "exklusion",
    feedPosts: [
      {
        username: "lena.travels",
        img: "IMG_1592.jpeg",
        likes: 18,
        caption: "Sonnenuntergang unter den Bäumen 🌅",
        comments: [
          { user: "paul.photo", text: "Mega Stimmung!" }
        ]
      },
      {
        username: "max.foodie",
        img: "IMG_1591.jpeg",
        likes: 23,
        caption: "Brunch Goals 🥞🍓",
        comments: [
          { user: "jonas.reist", text: "Brunch Goals" }
        ]
      },
      {
        username: "julia.nature",
        img: "IMG_1590.jpeg",
        likes: 40,
        caption: "Mein Lieblingsplatz 🌿💧",
        comments: [
          { user: "maria.lifestyle", text: "Was für ein Ort! 🌿" }
        ]
      }
    ],
    selfMaxLikes: 30,
    selfComments: [
      { name: "lisa.re", text: "wow" }
    ],
    selfCommentsCount: 1
  },

  // 2) neutral, viel Likes, Exklusion
  {
    id: "neutral_viel_exklusion",
    style: "neutral",
    likesLevel: "viel",
    social: "exklusion",
    feedPosts: [
      {
        username: "lena.travels",
        img: "IMG_1592.jpeg",
        likes: 307,
        caption: "Sonnenuntergang unter den Bäumen 🌅",
        comments: [
          { user: "anna.smile",  text: "Traumhaftes Licht 🌅" },
          { user: "paul.photo",  text: "Mega Stimmung!" },
          { user: "laura.life",  text: "Ich liebe solche Farben 😍" },
          { user: "sofia.loves", text: "Wunderschönes Bild ❤️" },
          { user: "felix.food",  text: "Da will man sofort hin!" },
          { user: "carla.dreams",text: "So schön eingefangen!" }
        ]
      },
      {
        username: "max.foodie",
        img: "IMG_1591.jpeg",
        likes: 230,
        caption: "Brunch Goals 🥞🍓",
        comments: [
          { user: "ben.adventures", text: "Das sieht köstlich aus 😋" },
          { user: "tina.sunny",     text: "Wo gibt’s das?!" },
          { user: "jonas.reist",    text: "Brunch Goals 🥞" },
          { user: "nico.fitness",   text: "Cheat Day approved 😅" },
          { user: "lena.travels",   text: "Ich liebe Pancakes 😍" }
        ]
      },
      {
        username: "julia.nature",
        img: "IMG_1590.jpeg",
        likes: 1300,
        caption: "Mein Lieblingsplatz 🌿💧",
        comments: [
          { user: "maria.lifestyle", text: "Was für ein Ort! 🌿" },
          { user: "leo.art",         text: "Natur pur 😍" },
          { user: "tina.sunny",      text: "Ich höre die Vögel zwitschern 🕊️" },
          { user: "jonas.reist",     text: "Da würde ich jetzt gerne spazieren!" },
          { user: "carla.dreams",    text: "So beruhigend ✨" },
          { user: "anna.smile",      text: "Deine Bilder sind immer so schön!" },
          { user: "paul.photo",      text: "Perfekter Moment!" }
        ]
      }
    ],
    selfMaxLikes: 30,
    selfComments: [
      { name: "lisa.re", text: "wow" }
    ],
    selfCommentsCount: 1
  },

  // 3) neutral, wenig Likes, Inklusion
  {
    id: "neutral_wenig_inklusion",
    style: "neutral",
    likesLevel: "wenig",
    social: "inklusion",
    feedPosts: [
      {
        username: "lena.travels",
        img: "IMG_1592.jpeg",
        likes: 18,
        caption: "Sonnenuntergang unter den Bäumen 🌅",
        comments: [
          { user: "paul.photo", text: "Mega Stimmung!" }
        ]
      },
      {
        username: "max.foodie",
        img: "IMG_1591.jpeg",
        likes: 23,
        caption: "Brunch Goals 🥞🍓",
        comments: [
          { user: "jonas.reist", text: "Brunch Goals" }
        ]
      },
      {
        username: "julia.nature",
        img: "IMG_1590.jpeg",
        likes: 40,
        caption: "Mein Lieblingsplatz 🌿💧",
        comments: [
          { user: "maria.lifestyle", text: "Was für ein Ort! 🌿" }
        ]
      }
    ],
    selfMaxLikes: 300,
    selfComments: [
      { name: "lisa.re",      text: "Wow, du strahlst! 😍" },
      { name: "_mariaaa_",    text: "Wunderschönes Bild!" },
      { name: "leon__",       text: "Du siehst toll aus 🔥" },
      { name: "Julia.flr",    text: "Traumhafte Aussicht!" },
      { name: "hannes98",     text: "Richtig cool" },
      { name: "svenja.photo", text: "So ein schönes Lächeln!" },
      { name: "luisa.reist",  text: "Arizona steht dir gut 😄" },
      { name: "martin.lk",    text: "Wo seid ihr genau gewesen?" },
      { name: "lara123",      text: "Ich will auch dahin 😍" },
      { name: "franz.x",      text: "Mega Bild!" }
    ],
    selfCommentsCount: 8
  },

  // 4) neutral, viel Likes, Inklusion
  {
    id: "neutral_viel_inklusion",
    style: "neutral",
    likesLevel: "viel",
    social: "inklusion",
    feedPosts: [
      {
        username: "lena.travels",
        img: "IMG_1592.jpeg",
        likes: 307,
        caption: "Sonnenuntergang unter den Bäumen 🌅",
        comments: [
          { user: "anna.smile",  text: "Traumhaftes Licht 🌅" },
          { user: "paul.photo",  text: "Mega Stimmung!" },
          { user: "laura.life",  text: "Ich liebe solche Farben 😍" },
          { user: "sofia.loves", text: "Wunderschönes Bild ❤️" },
          { user: "felix.food",  text: "Da will man sofort hin!" },
          { user: "carla.dreams",text: "So schön eingefangen!" }
        ]
      },
      {
        username: "max.foodie",
        img: "IMG_1591.jpeg",
        likes: 230,
        caption: "Brunch Goals 🥞🍓",
        comments: [
          { user: "ben.adventures", text: "Das sieht köstlich aus 😋" },
          { user: "tina.sunny",     text: "Wo gibt’s das?!" },
          { user: "jonas.reist",    text: "Brunch Goals 🥞" },
          { user: "nico.fitness",   text: "Cheat Day approved 😅" },
          { user: "lena.travels",   text: "Ich liebe Pancakes 😍" }
        ]
      },
      {
        username: "julia.nature",
        img: "IMG_1590.jpeg",
        likes: 1300,
        caption: "Mein Lieblingsplatz 🌿💧",
        comments: [
          { user: "maria.lifestyle", text: "Was für ein Ort! 🌿" },
          { user: "leo.art",         text: "Natur pur 😍" },
          { user: "tina.sunny",      text: "Ich höre die Vögel zwitschern 🕊️" },
          { user: "jonas.reist",     text: "Da würde ich jetzt gerne spazieren!" },
          { user: "carla.dreams",    text: "So beruhigend ✨" },
          { user: "anna.smile",      text: "Deine Bilder sind immer so schön!" },
          { user: "paul.photo",      text: "Perfekter Moment!" }
        ]
      }
    ],
    selfMaxLikes: 300,
    selfComments: [
      { name: "lisa.re",      text: "Wow, du strahlst! 😍" },
      { name: "_mariaaa_",    text: "Wunderschönes Bild!" },
      { name: "leon__",       text: "Du siehst toll aus 🔥" },
      { name: "Julia.flr",    text: "Traumhafte Aussicht!" },
      { name: "hannes98",     text: "Richtig cool" },
      { name: "svenja.photo", text: "So ein schönes Lächeln!" },
      { name: "luisa.reist",  text: "Arizona steht dir gut 😄" },
      { name: "martin.lk",    text: "Wo seid ihr genau gewesen?" },
      { name: "lara123",      text: "Ich will auch dahin 😍" },
      { name: "franz.x",      text: "Mega Bild!" }
    ],
    selfCommentsCount: 8
  },

  // 5) idealisiert, wenig Likes, Exklusion
  {
    id: "idealisiert_wenig_exklusion",
    style: "idealisiert",
    likesLevel: "wenig",
    social: "exklusion",
    feedPosts: [
      {
        username: "lena.travels",
        img: "idealisierte Frau 2.png",
        likes: 18,
        caption: "gym girly❤️",
        comments: [
          { user: "paul.photo", text: "Weiter so :)" }
        ]
      },
      {
        username: "max.foodie",
        img: "idealisierter Mann 2.png",
        likes: 23,
        caption: "Sei dir Selbst am nähesten. #deepthoughts",
        comments: [
          { user: "jonas.reist", text: "Stark" }
        ]
      },
      {
        username: "julia.nature",
        img: "Paarbild 2.png",
        likes: 40,
        caption: "Unser Lieblingsplatz",
        comments: [
          { user: "maria.lifestyle", text: "Wo ist das?" }
        ]
      }
    ],
    selfMaxLikes: 30,
    selfComments: [
      { name: "lisa.re", text: "wow" }
    ],
    selfCommentsCount: 1
  },

  // 6) idealisiert, viel Likes, Exklusion
  {
    id: "idealisiert_viel_exklusion",
    style: "idealisiert",
    likesLevel: "viel",
    social: "exklusion",
    feedPosts: [
      {
        username: "lena.travels",
        img: "idealisierte Frau 2.png",
        likes: 307,
        caption: "gym girly❤️",
        comments: [
          { user: "anna.smile",   text: "Woher ist das Set?" },
          { user: "paul.photo",   text: "Weiter so :)" },
          { user: "laura.life",   text: "Ich liebe solche Farben 😍" },
          { user: "sofia.loves",  text: "Wunderschönes Bild ❤️" },
          { user: "felix.food",   text: "Da will man sofort selber ins gym!" },
          { user: "carla.dreams", text: "So schön!" }
        ]
      },
      {
        username: "max.foodie",
        img: "idealisierter Mann 2.png",
        likes: 230,
        caption: "Sei dir Selbst am nähesten. #deepthoughts",
        comments: [
          { user: "ben.adventures", text: "Was ist deine Routine?" },
          { user: "tina.sunny",     text: "😋😋" },
          { user: "jonas.reist",    text: "Stark" },
          { user: "nico.fitness",   text: "Hast du jemals cheat days??" },
          { user: "lena.freja",     text: "schönen Urlaub noch" }
        ]
      },
      {
        username: "julia.nature",
        img: "Paarbild 2.png",
        likes: 1300,
        caption: "Unser Lieblingsplatz",
        comments: [
          { user: "maria.lifestyle", text: "Wo ist das?" },
          { user: "leo.art",         text: "Ihr seid super😍" },
          { user: "tina.sunny",      text: "Ich höre die Vögel zwitschern 🕊️" },
          { user: "jonas.reist",     text: "Da würde ich jetzt gerne essen!" },
          { user: "carla.dreams",    text: "Schön✨" },
          { user: "anna.smile",      text: "Eure Bilder sind immer so schön!" },
          { user: "paul.photo",      text: "Perfekter Moment!" }
        ]
      }
    ],
    selfMaxLikes: 30,
    selfComments: [
      { name: "lisa.re", text: "wow" }
    ],
    selfCommentsCount: 1
  },

  // 7) idealisiert, wenig Likes, Inklusion
  {
    id: "idealisiert_wenig_inklusion",
    style: "idealisiert",
    likesLevel: "wenig",
    social: "inklusion",
    feedPosts: [
      {
        username: "lena.travels",
        img: "idealisierte Frau 2.png",
        likes: 18,
        caption: "gym girly❤️",
        comments: [
          { user: "paul.photo", text: "Weiter so :)" }
        ]
      },
      {
        username: "max.foodie",
        img: "idealisierter Mann 2.png",
        likes: 23,
        caption: "Sei dir Selbst am nähesten. #deepthoughts",
        comments: [
          { user: "jonas.reist", text: "Stark" }
        ]
      },
      {
        username: "julia.nature",
        img: "Paarbild 2.png",
        likes: 40,
        caption: "Unser Lieblingsplatz",
        comments: [
          { user: "maria.lifestyle", text: "Wo ist das?" }
        ]
      }
    ],
    selfMaxLikes: 300,
    selfComments: [
      { name: "lisa.re",      text: "Wow, du strahlst! 😍" },
      { name: "_mariaaa_",    text: "Wunderschönes Bild!" },
      { name: "leon__",       text: "Du siehst toll aus 🔥" },
      { name: "Julia.flr",    text: "Traumhafte Aussicht!" },
      { name: "hannes98",     text: "Richtig cool" },
      { name: "svenja.photo", text: "So ein schönes Lächeln!" },
      { name: "luisa.reist",  text: "Arizona steht dir gut 😄" },
      { name: "martin.lk",    text: "Wo seid ihr genau gewesen?" },
      { name: "lara123",      text: "Ich will auch dahin 😍" },
      { name: "franz.x",      text: "Mega Bild!" }
    ],
    selfCommentsCount: 8
  },

  // 8) idealisiert, viel Likes, Inklusion
  {
    id: "idealisiert_viel_inklusion",
    style: "idealisiert",
    likesLevel: "viel",
    social: "inklusion",
    feedPosts: [
      {
        username: "lena.travels",
        img: "idealisierte Frau 2.png",
        likes: 307,
        caption: "gym girly❤️",
        comments: [
          { user: "anna.smile",   text: "Woher ist das Set?" },
          { user: "paul.photo",   text: "Weiter so :)" },
          { user: "laura.life",   text: "Ich liebe solche Farben 😍" },
          { user: "sofia.loves",  text: "Wunderschönes Bild ❤️" },
          { user: "felix.food",   text: "Da will man sofort selber ins gym!" },
          { user: "carla.dreams", text: "So schön!" }
        ]
      },
      {
        username: "max.foodie",
        img: "idealisierter Mann 2.png",
        likes: 230,
        caption: "Sei dir Selbst am nähesten. #deepthoughts",
        comments: [
          { user: "ben.adventures", text: "Was ist deine Routine?" },
          { user: "tina.sunny",     text: "😋😋" },
          { user: "jonas.reist",    text: "Stark" },
          { user: "nico.fitness",   text: "Hast du jemals cheat days??" },
          { user: "lena.freja",     text: "schönen Urlaub noch" }
        ]
      },
      {
        username: "julia.nature",
        img: "Paarbild 2.png",
        likes: 1300,
        caption: "Unser Lieblingsplatz",
        comments: [
          { user: "maria.lifestyle", text: "Wo ist das?" },
          { user: "leo.art",         text: "Ihr seid super😍" },
          { user: "tina.sunny",      text: "Ich höre die Vögel zwitschern 🕊️" },
          { user: "jonas.reist",     text: "Da würde ich jetzt gerne essen!" },
          { user: "carla.dreams",    text: "Schön✨" },
          { user: "anna.smile",      text: "Eure Bilder sind immer so schön!" },
          { user: "paul.photo",      text: "Perfekter Moment!" }
        ]
      }
    ],
    selfMaxLikes: 300,
    selfComments: [
      { name: "lisa.re",      text: "Wow, du strahlst! 😍" },
      { name: "_mariaaa_",    text: "Wunderschönes Bild!" },
      { name: "leon__",       text: "Du siehst toll aus 🔥" },
      { name: "Julia.flr",    text: "Traumhafte Aussicht!" },
      { name: "hannes98",     text: "Richtig cool" },
      { name: "svenja.photo", text: "So ein schönes Lächeln!" },
      { name: "luisa.reist",  text: "Arizona steht dir gut 😄" },
      { name: "martin.lk",    text: "Wo seid ihr genau gewesen?" },
      { name: "lara123",      text: "Ich will auch dahin 😍" },
      { name: "franz.x",      text: "Mega Bild!" }
    ],
    selfCommentsCount: 8
  }
];

let currentCondition = null;

function applyCondition(cond) {
  currentCondition = cond;
  sessionStorage.setItem('bedingung', cond.id);

  const feed = document.getElementById('feedPosts');
  if (!feed) return;

  const posts = feed.querySelectorAll('.post');

  cond.feedPosts.forEach((cfg, index) => {
    const post = posts[index];
    if (!post) return;

    const imgs = post.querySelectorAll('img');
    const contentImg = imgs[1]; // [0] = Profil, [1] = eigentlicher Post

    if (contentImg) {
      contentImg.src = cfg.img;
    }

    const likesDiv = post.querySelector('.likes');
    if (likesDiv) {
      likesDiv.dataset.likes = cfg.likes;
      likesDiv.textContent = `❤️ ${formatLikes(cfg.likes)} Likes`;
    }

    const commentsDiv = post.querySelector('.comments');
    if (commentsDiv) {
      commentsDiv.innerHTML = `<strong>${cfg.username}</strong> ${cfg.caption}`;
      cfg.comments.forEach(c => {
        const line = document.createElement('div');
        line.innerHTML = `<strong>${c.user}</strong> ${c.text}`;
        commentsDiv.appendChild(line);
      });
    }
  });

  initLikeButtons();
}

// ---------- Upload & eigener Post ----------

function uploadPost() {
  if (sessionStorage.getItem('bereitsGepostet') === 'true') {
    alert('Du hast bereits einen Beitrag gepostet.');
    return;
  }

  const uploadBtn = document.querySelector('#captionScreen .post-btn');
  if (uploadBtn) {
    uploadBtn.disabled = true;
    uploadBtn.style.opacity = 0.5;
    uploadBtn.textContent = 'Post wird erstellt.';
  }

  const uploadBar = document.getElementById('topUploadBar');
  const fill = document.getElementById('uploadFill');
  const uploadText = document.getElementById('uploadText');
  let percent = 0;

  if (fill) fill.style.width = '0%';
  if (uploadBar) uploadBar.style.display = 'block';
  if (uploadText) uploadText.style.display = 'inline';

  showScreen('home');

  const interval = setInterval(() => {
    percent += 2;
    if (fill) fill.style.width = percent + '%';

    if (percent >= 100) {
      clearInterval(interval);
      if (uploadBar) uploadBar.style.display = 'none';
      if (uploadText) uploadText.style.display = 'none';

      sessionStorage.setItem('bereitsGepostet', 'true');
      displayNewPost();

      alert('Dein Beitrag wurde erfolgreich hochgeladen!');
    }
  }, 50);
}

function displayNewPost() {
  const feed = document.getElementById('feedPosts');
  if (!feed || !currentCondition) return;

  const newPost = document.createElement('div');
  newPost.className = 'post';

  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.marginBottom = '10px';
  header.style.padding = '5px 10px';

  const profilePic = document.createElement('img');
  profilePic.src = 'Profilbild.jpeg';
  profilePic.style.width = '30px';
  profilePic.style.height = '30px';
  profilePic.style.borderRadius = '50%';
  profilePic.style.marginRight = '10px';

  const username = document.createElement('strong');
  username.textContent = 'alex.kunz';

  header.appendChild(profilePic);
  header.appendChild(username);
  newPost.appendChild(header);

  const img = document.createElement('img');
  img.src = selectedImage;
  newPost.appendChild(img);

  const metaContainer = document.createElement('div');
  metaContainer.className = 'meta-container';

  const likes = document.createElement('div');
  likes.className = 'likes';
  likes.dataset.likes = 0;
  likes.textContent = '❤️ 0 Likes';

  const comments = document.createElement('div');
  comments.className = 'comments';

  metaContainer.appendChild(likes);
  metaContainer.appendChild(comments);

  const captionText = (document.getElementById('caption')?.value || '').trim();
  if (captionText) {
    const userLine = document.createElement('div');
    userLine.innerHTML = `<strong>alex.kunz</strong> ${captionText}`;
    comments.appendChild(userLine);
  }

  const list = currentCondition.selfComments || [];
  const n = currentCondition.selfCommentsCount || 0;
  list.slice(0, n).forEach(c => {
    const line = document.createElement('div');
    line.innerHTML = `<strong>${c.name}</strong> ${c.text}`;
    comments.appendChild(line);
  });

  const commentInput = document.createElement('div');
  commentInput.className = 'comment-input';
  commentInput.innerHTML = `
    <input type="text" placeholder="Kommentiere etwas…" />
    <button>Posten</button>
  `;
  metaContainer.appendChild(commentInput);

  newPost.appendChild(metaContainer);

  feed.insertBefore(newPost, feed.firstChild);
  feed.scrollTo({ top: 0, behavior: 'smooth' });

  const likeBtn = document.createElement('button');
  likeBtn.className = 'like-btn';
  likeBtn.textContent = '❤️';
  metaContainer.insertBefore(likeBtn, likes);

  // Like-Animation – Inklusion schneller
  const maxLikes = currentCondition.selfMaxLikes || 0;
  let count = 0;
  const heart = document.getElementById('heartFly');

  let step = 1;
  if (currentCondition.social === 'inklusion' && maxLikes >= 100) {
    step = 6;
  }

  const likeInterval = setInterval(() => {
    count += step;

    if (count >= maxLikes) {
      count = maxLikes;
      clearInterval(likeInterval);
    }

    likes.dataset.likes = count;
    likes.textContent = `❤️ ${count} Likes`;

    if (heart) {
      heart.style.display = 'block';
      heart.style.animation = 'none';
      requestAnimationFrame(() => {
        heart.style.animation = 'pop 0.6s ease-out';
      });
      setTimeout(() => {
        heart.style.display = 'none';
      }, 600);
    }
  }, 350);
}

// ---------- Like-Buttons ----------

function initLikeButtons() {
  const posts = document.querySelectorAll('#feedPosts .post');
  posts.forEach(post => {
    const meta = post.querySelector('.meta-container');
    if (!meta || post.querySelector('.like-btn')) return;

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.textContent = '❤️';

    const likes = meta.querySelector('.likes');
    if (!likes) return;

    const current = parseInt(
      likes.dataset.likes || likes.textContent.match(/\d+/)?.[0] || '0',
      10
    );
    likes.dataset.likes = current;

    meta.insertBefore(likeBtn, likes);
  });
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('like-btn')) {
    const btn = e.target;
    const likesDiv = btn.nextElementSibling;
    if (!likesDiv) return;

    let count = parseInt(likesDiv.dataset.likes || '0', 10);

    if (btn.classList.toggle('liked')) {
      count++;
    } else {
      count--;
    }

    if (count < 0) count = 0;
    likesDiv.dataset.likes = count;
    likesDiv.textContent = `❤️ ${count} Likes`;
  }
});

// ---------- Eigene Kommentare pro Post nur einmal ----------

document.addEventListener('click', (e) => {
  const button = e.target.closest('.comment-input button');
  if (!button) return;

  const inputDiv = button.closest('.comment-input');
  if (!inputDiv) return;

  const meta = inputDiv.closest('.meta-container');
  if (!meta) return;

  if (meta.dataset.userCommented === 'true') return;

  const input = inputDiv.querySelector('input');
  const text = input.value.trim();
  if (!text) return;

  const commentsDiv = meta.querySelector('.comments');

  const line = document.createElement('div');
  line.innerHTML = `<strong>alex.kunz</strong> ${text}`;
  commentsDiv.appendChild(line);

  meta.dataset.userCommented = 'true';

  input.disabled = true;
  button.disabled = true;
  button.classList.add('comment-disabled');
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const input = e.target.closest('.comment-input input');
  if (!input) return;

  e.preventDefault();

  const meta = input.closest('.meta-container');
  if (!meta) return;

  if (meta.dataset.userCommented === 'true') {
    return;
  }

  const text = input.value.trim();
  if (!text) return;

  const commentsDiv = meta.querySelector('.comments');
  if (!commentsDiv) return;

  const line = document.createElement('div');
  line.innerHTML = `<strong>alex.kunz</strong> ${text}`;
  commentsDiv.appendChild(line);

  meta.dataset.userCommented = 'true';

  const btn = meta.querySelector('.comment-input button');
  if (btn) {
    btn.disabled = true;
    btn.classList.add('comment-disabled');
  }
  input.disabled = true;
});

// ---------- Initialisierung: zufällige Bedingung ----------

document.addEventListener('DOMContentLoaded', () => {
  const idx = Math.floor(Math.random() * CONDITIONS.length);
  const cond = CONDITIONS[idx];
  applyCondition(cond);
});

