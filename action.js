const container = document.querySelector('.container');

        

        // fetch('https://www.reddit.com/r/BlackPink/hot.json')
        //     .then(function (resp) {
        //         return resp.json();
        //     })
        //     .then(function (data) {
        //         data.data.children.forEach(function (item) {
        //             // console.log(item.data)
        //             const divdisplay = document.createElement('div');
        //             const post = document.createElement('div');
        //             const title = document.createElement('h3');
        //             const img = document.createElement('img');
        //             const hr = document.createElement('hr');

        //             divdisplay.classList.add('divdisplay');
        //             post.classList.add('post');
        //             title.innerHTML = item.data.title;
        //             img.setAttribute('src', item.data.thumbnail);

        //             post.append(title);
        //             post.append(img);
        //             post.append(hr);
        //             divdisplay.append(post);
        //             container.append(divdisplay);
        //         })
        //     })


            //AJAX

            const xhttp = new XMLHttpRequest();
            
            const xmlreq = "https://www.reddit.com/r/BlackPink/hot.json";

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const reqjson = JSON.parse(this.responseText);
                myFunction(reqjson);
                }
                
              };
              xhttp.open("GET", xmlreq, true);
              xhttp.send();

              function myFunction(data){

                data.data.children.forEach(function (item) {
                // console.log(item.data)

                                const divdisplay = document.createElement('div');
                                const post = document.createElement('div');
                                const title = document.createElement('h3');
                                const img = document.createElement('img');
                                const hr = document.createElement('hr');
            
                                divdisplay.classList.add('divdisplay');
                                post.classList.add('post');
                                title.innerHTML = item.data.title;
                                img.setAttribute('src', item.data.thumbnail);
            
                                post.append(title);
                                post.append(img);
                                post.append(hr);
                                divdisplay.append(post);
                                container.append(divdisplay);
                            })
              }