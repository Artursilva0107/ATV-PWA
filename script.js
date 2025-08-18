if ("ServiceWorker" in navigator) {
    navigator.ServiceWorker
    .register("sw.js")
    .then((registration)=>{
    console.log("Service Worker Registrado com sucesso!",registration);
})
    .catch((erro)=>{
        console.log("falha ao tentar registrar o server worker!");
});
}