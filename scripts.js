const template = (function () {
    const languageSelected = document.querySelector('#language-tags');
    const listElement = document.querySelector('#list');
    let listItems = [];
    let languageTag = 'en-US';
    languageSelected.addEventListener('change', changeLanguage);

    function setList(list){
        listItems = list;
        render();
    }

    function changeLanguage() {
        languageTag = languageSelected.value;
        render();
    }
    function render() {
        let html = '';
        const numberFormatter = Intl.NumberFormat(languageTag);
        const dateFormatter = Intl.DateTimeFormat(languageTag,
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
    
            });
    
        listItems.forEach((item) => {
            const forks = numberFormatter.format(item.forks);
            const createdAt = dateFormatter.format(new Date(item.created_at));
    
            html += `<li>
                <div>
                    <b>Name</b> ${item.full_name}
                </div>
                <div>
                    <b>Create At:</b> ${createdAt}
                </div>
                <div>
                    <b>Forks</b> ${forks} 
                </div>        
            </li>    `;
        });
        listElement.innerHTML = html;
    }

    return {
        setList
    }
})();

const data = (function($){
    const searchInput = document.querySelector('#search');
    searchInput.addEventListener('keyup', search);

    function search(event){
        if(event && event.keyCode === 13){
            $.setList([
                {
                    full_name: 'JavaScript',
                    created_at: '2020-08-12T12:00',
                    forks: 1280
                },
                {
                    full_name: 'JavaScript',
                    created_at: '2020-08-12T12:00',
                    forks: 1280
                },
                {
                    full_name: 'JavaScript',
                    created_at: '2020-08-12T12:00',
                    forks: 1280
                }
            ])
        }
    }

})(template)











