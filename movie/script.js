// 로그인 데이터
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

// 로그인 처리
document.getElementById('login-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
      alert(`${user.role}로 로그인 성공!`);
      window.location.href = user.role === 'admin' ? 'admin.html' : 'index.html';
  } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
  }
});

// 회원가입 처리
document.getElementById('signup-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  users.push({ username, password, email, role: 'user' });
  alert('회원가입 완료!');
  window.location.href = 'login.html';
});

// 영화 데이터 (관리자 전용)
// 영화 데이터
const movies = [
  {
      id: 1,
      title: "영화 A",
      description: "흥미진진한 모험과 스릴을 담은 영화 A.",
      image: "https://via.placeholder.com/300x200",
      detailsPage: "movie-details.html?id=1"
  },
  {
      id: 2,
      title: "영화 B",
      description: "감동적인 이야기를 담은 영화 B.",
      image: "https://via.placeholder.com/300x200",
      detailsPage: "movie-details.html?id=2"
  },
  {
      id: 3,
      title: "영화 C",
      description: "가족과 함께 즐길 수 있는 유쾌한 영화 C.",
      image: "https://via.placeholder.com/300x200",
      detailsPage: "movie-details.html?id=3"
  },
  {
      id: 4,
      title: "영화 D",
      description: "전율을 느낄 수 있는 스릴러 영화 D.",
      image: "https://via.placeholder.com/300x200",
      detailsPage: "movie-details.html?id=4"
  },
  {
      id: 5,
      title: "영화 E",
      description: "로맨스와 드라마가 가득한 영화 E.",
      image: "https://via.placeholder.com/300x200",
      detailsPage: "movie-details.html?id=5"
  }
];

// 메인 페이지의 영화 목록 렌더링
function renderMovieList() {
  const movieList = document.getElementById("movie-list");

  movies.forEach(movie => {
      const movieItem = document.createElement("div");
      movieItem.className = "movie-item";
      movieItem.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.description}</p>
          <a href="${movie.detailsPage}">자세히 보기</a>
      `;
      movieList.appendChild(movieItem);
  });
}

// 초기화
if (document.getElementById("movie-list")) {
  renderMovieList();
}

// URL 파라미터로 영화 ID 가져오기
const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get("id"));

// 선택한 영화 데이터 찾기
const selectedMovie = movies.find(movie => movie.id === movieId);

// 영화 상세 정보 렌더링
function renderMovieDetails() {
    const detailsContainer = document.getElementById("movie-details");

    if (selectedMovie) {
        detailsContainer.innerHTML = `
            <h2>${selectedMovie.title}</h2>
            <img src="${selectedMovie.image}" alt="${selectedMovie.title}">
            <p>${selectedMovie.description}</p>
            <a href="booking.html?id=${selectedMovie.id}">예매하기</a>
        `;
    } else {
        detailsContainer.innerHTML = "<p>영화 정보를 찾을 수 없습니다.</p>";
    }
}

// 초기화
if (document.getElementById("movie-details")) {
    renderMovieDetails();
}