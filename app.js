let userId;
let DATA = {
  users: [
    {
      id: 0,
      first_name: "Xudoyor",
      last_name: "Quronboyev",
      avatar: "./images/Cartoon_Meditating_Man.svg",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "online",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...1",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 1,
      first_name: "Abror",
      last_name: "Bekturdiyev",
      avatar:
        "./images/Handsome_Bald_Man_Face_Bearded_Amazed_Mature_Fashion_Attractive_Nature.png",
      bio: "Believe yourself",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "Last seen recently",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...2",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 2,
      first_name: "Shahriyor",
      last_name: "Sapaorboyev",
      avatar: "./images/Handsome_Man_Face_Bearded.png",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "Last seen at 11:25",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...3",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 3,
      first_name: "Jamshid",
      last_name: "Rajapboyev",
      avatar: "./images/images (2).png",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "Last seen recently",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...4",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 5,
      first_name: "Bekzod",
      last_name: "Mammatov",
      avatar: "./images/Cartoon_Meditating_Man.svg",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "online",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...5",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 6,
      first_name: "Kamron",
      last_name: "Rajapov",
      avatar: "./images/download.png",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "Last seen recently",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...6",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 7,
      first_name: "Husan",
      last_name: "Samandarov",
      avatar: "./images/Handsome_Man_Face_Bearded.png",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "online",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...7",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 8,
      first_name: "Eldor",
      last_name: "Qodirberganov",
      avatar:
        "./images/Handsome_Bald_Man_Face_Bearded_Amazed_Mature_Fashion_Attractive_Nature.png",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "online",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...8",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 9,
      first_name: "Javohir",
      last_name: "Rahmonov",
      avatar: "./images/Cartoon_Meditating_Man.svg",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "Last seen at 22:00",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...9",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
    {
      id: 10,
      first_name: "Jahongir",
      last_name: "Pozilov",
      avatar: "./images/Cartoon_Meditating_Man.svg",
      bio: "I'm anywhere",
      groups_common: 4,
      shared_links: 15,
      shared_photos: 20,
      shared_voice: 15,
      activity: "online",
      messages: [
        {
          id: 1,
          is_from_me: false,
          text: "lorem ipsum dolor sit amet...10",
          time: new Date(),
        },
        {
          id: 2,
          is_from_me: true,
          text: "lorem ipsum dolor sit amet...",
          time: new Date(),
        },
      ],
    },
  ],
};

let avatarElement = document.querySelector(".contact__avatar");
let contactsList = document.querySelector(".contacts__list");

function htmlElemnts(array) {
  array.forEach((element) => {
    let chatsElement = document.createElement("div");
    chatsElement.className += "chats";
    chatsElement.setAttribute("user_id", element.id);
    let contactAvatar = document.createElement("img");
    contactAvatar.className += "contact__avatar";
    contactAvatar.src = `${element.avatar}`;
    chatsElement.appendChild(contactAvatar);
    let contactData = document.createElement("div");
    contactData.className += "contact__data";

    let contactName = document.createElement("div");
    contactName.className += "contact__name";
    contactName;

    let chatIcon = document.createElement("i");
    chatIcon.className += "contact__name";
    chatIcon.setAttribute("id", "chat__icon");
    chatIcon.className = "fas fa-user";
    contactName.appendChild(chatIcon);
    let contactNick = document.createElement("h4");
    contactNick.className += "contact__nick";
    contactName.appendChild(contactNick);
    contactData.appendChild(contactName);
    contactNick.textContent = element.first_name + " " + element.last_name;

    let contactMessages = document.createElement("p");
    contactMessages.className += "contact__messages";
    contactData.appendChild(contactMessages);
    chatsElement.appendChild(contactData);
    contactMessages.textContent = `${element.messages[
      element.messages.length - 1
    ].text.slice()}`;

    contactsList.appendChild(chatsElement);
  });
}
htmlElemnts(DATA.users);


let filteredSearch = () => {
  let contactNameFilter = document.querySelectorAll(".chats");
  let searchContactsFilter = document
    .querySelector(".search__contacts")
    .value.toUpperCase();

  for (let a = 0; a < contactNameFilter.length; a++) {
    let li = contactNameFilter[a].getElementsByClassName("contact__nick")[0];
    if (li) {
      let liTextValue = li.textContent || li.innerHTML;

      if (liTextValue.toUpperCase().indexOf(searchContactsFilter) > -1) {
        contactNameFilter[a].style.display = "";
      } else {
        contactNameFilter[a].style.display = "none";
      }
    }
  }
};

let text = [];
let textInput = document.querySelector(".typing__input");
let sendBtn = document.querySelector(".send__btn");
let textArea = document.createElement("p");
let text__arae = document.querySelector(".typing__section");
text__arae.appendChild(textArea);
text.push(textArea);
sendBtn.addEventListener("click", () => {
  let newMessage = document.querySelector(".typing__input").value;
  textInput.value = "";
  for (let tabs in DATA) {
    DATA[tabs].forEach((chatItem, index) => {
      if (index === userId) {
        chatItem.messages.push({
          id: chatItem.messages[chatItem.messages.length - 1].id + 1,
          is_from_me: true,
          text: newMessage,
          time: new Date(),
        });
      }
    });
  }
  renderMessage(userId);
});

let chats = document.querySelectorAll(".chats");
let nameBio = document.querySelector(".data_contact_name");
chats.forEach(function (chat) {
  chat.addEventListener("click", function () {
    userId = chat.getAttribute("user_id");
    console.log(userId);
    userId -= 0;

    let user = DATA.users[userId];
    nameBio.innerHTML = user.first_name + " " + user.last_name;

    renderMessage(userId);
  });
});

function renderMessage(userId) {
  let textArea = document.querySelector(".typing__section");
  // console.log(true);
  textArea.innerHTML = "";
  for (let tabs in DATA) {
    DATA[tabs].forEach((chatItem, index) => {
      if (index === userId) {
        chatItem.messages.forEach((messages) => {
          textArea.innerHTML += `<li class=" ${
            messages.is_from_me ? "message_list_from_me" : "message_list"
          }">

          <span class="message_list_from">${messages.text}</span>
          </li>`;
        });
      }
    });
  }
}
