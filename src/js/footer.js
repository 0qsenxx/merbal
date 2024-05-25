const url = `https://energyflow.b.goit.study/api/subscription`;
const formUsers = document.querySelector(".footer__form");
// console.log(url)

function addUsers(newUsers) {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(newUsers),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }).then(res =>
        res.json()
    ).then(res =>
        console.log(res)
    ).catch(error =>
        console.log(error)
    );
};

if (formUsers) {
    formUsers.addEventListener("submit", (e) => {
        e.preventDefault();
        const newUsers = {
            email: e.currentTarget.elements.email.value,
        };
        console.log(newUsers);
        addUsers(newUsers);
        e.currentTarget.reset();

    })
}