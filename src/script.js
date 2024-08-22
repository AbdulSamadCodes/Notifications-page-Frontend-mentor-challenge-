/* function to style unread cards icon */
function styleUnreadcardIcon(unreadicon) {
  unreadicon.classList.add('unread-icon');

  unreadicon.style.display = "inline-block";
  unreadicon.style.width = '7px';
  unreadicon.style.height = '7px';
  unreadicon.style.backgroundColor = "hsl(1, 90%, 64%)";
  unreadicon.style.borderRadius = '50%';
}

/* function to generate unread cards icon */
function generateUnreadcardIcon() {
  const unreadCardText = document.querySelectorAll('.unread-card .notification__text');
  
  for(const unreadText of unreadCardText) {
    const unreadicon = document.createElement('span');
    styleUnreadcardIcon(unreadicon);
    unreadText.appendChild(unreadicon);
  }
}

generateUnreadcardIcon();

//function to mark all unread cards read
function markAllCardsRead() {
  const unreadCards = document.querySelectorAll('.unread-card'); 
  const markAllReadBtn =  document.querySelector('.mark-all-read');
  const notificationsCount = document.querySelector('.notifications__count');

  markAllReadBtn.addEventListener('click',() => {
    unreadCards.forEach((unreadCard) => {
       unreadCard.querySelector('.unread-icon').remove();
       unreadCard.classList.remove('unread-card'); 
    });

    notificationsCount.textContent = "0";
  });
} 

markAllCardsRead();