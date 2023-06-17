const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-9',
    headers: {
        authorization: '5f84d00d-ffea-4e1d-8597-0079b0ed03a0',
        'Content-Type': 'application/json'
    }
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    /*при ошибке отклоняю промис*/
    return Promise.reject(`Ошибка: ${res.status}`);
}

/*информация о пользователе c сервера*/
export function getUserInformation() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    }).then(checkResponse);
}

/*отправка информация о пользователе на сервер*/
export function setUserInformation(about, name) {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
        method: "PATCH",
        body: JSON.stringify({
            about: about,
            name: name,
        }),
    }).then(checkResponse);
}

//функция отвечает только за отправку/получения данных
export function getCards() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
    }).then(checkResponse);
}

//запрос на добавление карточек
export function setCard(url, name) {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
        method: "POST",
        body: JSON.stringify({
            link: url,
            name: name,
        }),
    }).then(checkResponse);
}

/*запрос на удаление карточки*/
export function deleteCard(userId) {
    return fetch(`${config.baseUrl}/cards/${userId}`, {
        method: "DELETE",
        headers: config.headers,
    }).then(checkResponse);
}

/*Запрос на удaление лайков*/
export function deleteLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: config.headers,
    }).then(checkResponse);
}

/*Запрос на добавление лайков*/
export function setLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: config.headers,
    }).then(checkResponse);
}

/*запрос на загрузку аватара на сервер*/
export function setUserAvatar(url) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            avatar: url,
        }),
    }).then(checkResponse);
}
