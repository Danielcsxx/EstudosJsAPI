const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", buscarPosts);

const btnLimpa = document.getElementById("btn-limpa");
btnLimpa.addEventListener("click", function (event) {
  event.preventDefault();
  limparPosts();
});

async function buscarPosts() {
  const linkAPI = "https://jsonplaceholder.typicode.com/posts";
  // Código direto. Performance Maior.
  try {
    const response = await fetch(linkAPI);

    if (!response.ok) {
      throw new Error("Erro na requisição da API.");
    }

    const data = await response.json();
    postsCarregados(data);
    console.log("Dados retornados da API: ", data);
    //
  } catch (error) {
    console.log("Error: ", error);
  }

  // Código direto. Performance menor.
  // fetch(linkAPI, { method: "GET" })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Erro na requisição da API.");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     postsCarregados(data);
  //     console.log("Dados retornados da API: ", data);
  //   })
  //   .catch((error) => {
  //     console.log("Error: ", error);
  //   });
}

function postsCarregados(data) {
  const divPost = document.querySelector(".div-post");
  const divPosts = document.getElementById("div-result");

  divPosts.innerHTML = "";
  divPost.classList.add("visible");

  data.slice(0, 10).forEach((post) => {
    divPosts.innerHTML += `
        <div class="posts">
            <p><strong>Title </strong>${post.title}</p>
            <p><strong>Body </strong>${post.body}</p>
        </div>
    `;
  });
}

function limparPosts() {
  const divPost = document.querySelector(".div-post");
  const divPosts = document.getElementById("div-result");

  divPosts.innerHTML = "";
  console.clear();

  divPost.classList.remove("visible");
}