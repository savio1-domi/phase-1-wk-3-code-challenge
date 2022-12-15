// create variables  
const showTimeDisplay = document.getElementById('showtime')
const availableTicketsDisplay = document.getElementById('tickets-available')
const buyTicketBtn = document.getElementById('book-ticket')
const movieTitleDisplay = document.getElementById('name-of-movie')

window.addEventListener('DOMContentLoaded', ()=>{
    const fetchMovieList = fetch('/db.json')
    fetchMovieList.then(res => res.json()).then(data => {
        // create images 1 to 14
        const firstImg = document.createElement('img')
        firstImg.src = data.films[0].poster

        const secondImg = document.createElement('img')
        secondImg.src = data.films[1].poster

        const thirdImg = document.createElement('img')
        thirdImg.src = data.films[2].poster

        const fourthImg = document.createElement('img')
        fourthImg.src = data.films[3].poster

        const fifthImg = document.createElement('img')
        fifthImg.src = data.films[4].poster

        const sixthImg = document.createElement('img')
        sixthImg.src = data.films[5].poster

        const seventhImg = document.createElement('img')
        seventhImg.src = data.films[6].poster

        const eigthImg = document.createElement('img')
        eigthImg.src = data.films[7].poster

        const ninthImg = document.createElement('img')
        ninthImg.src = data.films[8].poster

        const tenthImg = document.createElement('img')
        tenthImg.src = data.films[9].poster

        const eleventhImg = document.createElement('img')
        eleventhImg.src = data.films[10].poster

        const twelveImg = document.createElement('img')
        twelveImg.src = data.films[11].poster

        const thirteenImg = document.createElement('img')
        thirteenImg.src = data.films[12].poster

        const fourteenImg = document.createElement('img')
        fourteenImg.src = data.films[13].poster

        const fifteenImg = document.createElement('img')
        fifteenImg.src = data.films[14].poster


        //what happens when clicked 
        firstImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[0].poster
            let remainingTicket = ((data.films[0].capacity) - (data.films[0].tickets_sold))
            //  dpmi shown
            movieTitle.textContent = data.films[0].title
            document.getElementById('description').textContent = data.films[0].description
            document.getElementById('dpmi').textContent = data.films[0].dpmi
            // showtime shown
            document.getElementById('showtime').textContent = data.films[0].showtime

            // shows tickets available 
            // remaining tickets after the user has book
            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        //   document.getElementById and appendChild
        const firsth5 = document.createElement('h3')
        firsth5.textContent = data.films[0].title
        
        document.getElementById('img1').appendChild(firstImg)
        document.getElementById('img1').appendChild(firsth5)
       
        
        secondImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[1].poster
            let remainingTicket = ((data.films[1].capacity) - (data.films[1].tickets_sold))
        
            movieTitle.textContent = data.films[1].title
            document.getElementById('description').textContent = data.films[1].description
            document.getElementById('dpmi').textContent = data.films[1].dpmi
   
            document.getElementById('showtime').textContent = data.films[1].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })

        })
        const secondh5 = document.createElement('h3')
        secondh5.textContent = data.films[1].title

        document.getElementById('img2').appendChild(secondImg)
        document.getElementById('img2').appendChild(secondh5)


        thirdImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[2].poster
            let remainingTicket = ((data.films[2].capacity) - (data.films[2].tickets_sold))
        
            movieTitle.textContent = data.films[2].title
            document.getElementById('description').textContent = data.films[2].description
            document.getElementById('dpmi').textContent = data.films[2].dpmi
            
            document.getElementById('showtime').textContent = data.films[2].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })

        })
        const thirdh5 = document.createElement('h3')
        thirdh5.textContent = data.films[2].title

        document.getElementById('img2').appendChild(thirdImg)
        document.getElementById('img2').appendChild(thirdh5)

    
        fourthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[3].poster
            let remainingTicket = ((data.films[3].capacity) - (data.films[3].tickets_sold))
            
            movieTitle.textContent = data.films[3].title
            document.getElementById('description').textContent = data.films[3].description
            document.getElementById('dpmi').textContent = data.films[3].dpmi
            
            document.getElementById('showtime').textContent = data.films[3].showtime
            
            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })

        })
        const fourthh5 = document.createElement('h3')
        fourthh5.textContent = data.films[3].title

        document.getElementById('img2').appendChild(fourthImg)
        document.getElementById('img2').appendChild(fourthh5)

        
        fifthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[4].poster
            let remainingTicket = ((data.films[4].capacity) - (data.films[4].tickets_sold))
            
            movieTitle.textContent = data.films[4].title
            document.getElementById('description').textContent = data.films[4].description
            document.getElementById('dpmi').textContent = data.films[4].dpmi
            
            document.getElementById('showtime').textContent = data.films[4].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })

        })
        
        const fifthh5 = document.createElement('h3')
        fifthh5.textContent = data.films[4].title

        document.getElementById('img2').appendChild(fifthImg)
        document.getElementById('img2').appendChild(fifthh5)

        
        sixthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[5].poster
            let remainingTicket = ((data.films[5].capacity) - (data.films[5].tickets_sold))
            
            movieTitle.textContent = data.films[5].title
            document.getElementById('description').textContent = data.films[5].description
            document.getElementById('dpmi').textContent = data.films[5].dpmi
    
            document.getElementById('showtime').textContent = data.films[5].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const sixthh5 = document.createElement('h3')
        sixthh5.textContent = data.films[5].title

        document.getElementById('img2').appendChild(sixthImg)
        document.getElementById('img2').appendChild(sixthh5)

        
        seventhImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[6].poster
            let remainingTicket = ((data.films[6].capacity) - (data.films[6].tickets_sold))
            
            movieTitle.textContent = data.films[6].title
            document.getElementById('description').textContent = data.films[6].description
            document.getElementById('dpmi').textContent = data.films[6].dpmi
            
            document.getElementById('showtime').textContent = data.films[6].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const seventhh5 = document.createElement('h3')
        seventhh5.textContent = data.films[6].title

        document.getElementById('img2').appendChild(seventhImg)
        document.getElementById('img2').appendChild(seventhh5)

    
        eigthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[7].poster
            let remainingTicket = ((data.films[7].capacity) - (data.films[7].tickets_sold))
            
            movieTitle.textContent = data.films[7].title
            document.getElementById('description').textContent = data.films[7].description
            document.getElementById('dpmi').textContent = data.films[7].dpmi
            
            document.getElementById('showtime').textContent = data.films[7].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const eigthh5 = document.createElement('h3')
        eigthh5.textContent = data.films[7].title
        document.getElementById('img2').appendChild(eigthImg)
        document.getElementById('img2').appendChild(eigthh5)

        
        ninthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[8].poster
            let remainingTicket = ((data.films[8].capacity) - (data.films[8].tickets_sold))
            
            movieTitle.textContent = data.films[8].title
            document.getElementById('description').textContent = data.films[8].description
            document.getElementById('dpmi').textContent = data.films[8].dpmi
            
            document.getElementById('showtime').textContent = data.films[8].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const ninthh5 = document.createElement('h3')
        ninthh5.textContent = data.films[8].title
        document.getElementById('img2').appendChild(ninthImg)
        document.getElementById('img2').appendChild(ninthh5)

        
        tenthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[9].poster
            let remainingTicket = ((data.films[9].capacity) - (data.films[9].tickets_sold))

            movieTitle.textContent = data.films[9].title
            document.getElementById('description').textContent = data.films[9].description
            document.getElementById('dpmi').textContent = data.films[9].dpmi
            
            document.getElementById('showtime').textContent = data.films[9].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })

        })
        const tenthh5 = document.createElement('h3')
        tenthh5.textContent = data.films[9].title
        document.getElementById('img2').appendChild(tenthImg)
        document.getElementById('img2').appendChild(tenthh5)

        
        eleventhImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[10].poster
            let remainingTicket = ((data.films[10].capacity) - (data.films[10].tickets_sold))
            
            movieTitle.textContent = data.films[10].title
            document.getElementById('description').textContent = data.films[10].description
            document.getElementById('dpmi').textContent = data.films[10].dpmi
            
            document.getElementById('showtime').textContent = data.films[10].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const eleventhh5 = document.createElement('h3')
        eleventhh5.textContent = data.films[10].title
        document.getElementById('img2').appendChild(eleventhImg)
        document.getElementById('img2').appendChild(eleventhh5)

    
        twelveImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[11].poster
            let remainingTicket = ((data.films[11].capacity) - (data.films[11].tickets_sold))
    
            movieTitle.textContent = data.films[11].title
            document.getElementById('description').textContent = data.films[11].description
            document.getElementById('dpmi').textContent = data.films[11].dpmi
           
            document.getElementById('showtime').textContent = data.films[11].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const twelveh5 = document.createElement('h3')
        twelveh5.textContent = data.films[11].title
        document.getElementById('img2').appendChild(twelveImg)
        document.getElementById('img2').appendChild(twelveh5)

        
        thirteenImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[12].poster
            let remainingTicket = ((data.films[12].capacity) - (data.films[12].tickets_sold))
            
            movieTitle.textContent = data.films[12].title
            document.getElementById('description').textContent = data.films[12].description
            document.getElementById('dpmi').textContent = data.films[12].dpmi
            
            document.getElementById('showtime').textContent = data.films[12].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const thirteenh5 = document.createElement('h3')
        thirteenh5.textContent = data.films[12].title
        document.getElementById('img2').appendChild(thirteenImg)
        document.getElementById('img2').appendChild(thirteenh5)

        
        fourteenImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[13].poster
            let remainingTicket = ((data.films[13].capacity) - (data.films[13].tickets_sold))
            
            movieTitle.textContent = data.films[13].title
            document.getElementById('description').textContent = data.films[13].description
            document.getElementById('dpmi').textContent = data.films[13].dpmi

            document.getElementById('showtime').textContent = data.films[13].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const fourteenh5 = document.createElement('h3')
        fourteenh5.textContent = data.films[13].title
        document.getElementById('img2').appendChild(fourteenImg)
        document.getElementById('img2').appendChild(fourteenh5)

    
        fifteenImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[14].poster
            let remainingTicket = ((data.films[14].capacity) - (data.films[14].tickets_sold))
            
            movieTitle.textContent = data.films[14].title
            document.getElementById('description').textContent = data.films[14].description
            document.getElementById('dpmi').textContent = data.films[14].dpmi
            
            document.getElementById('showtime').textContent = data.films[14].showtime

            document.getElementById('tickets-available').textContent = remainingTicket
            document.getElementById('book-ticket').addEventListener('click', ()=>{
                document.getElementById('tickets-available').textContent = remainingTicket--
            })
        })
        const fifteenh5 = document.createElement('h3')
        fifteenh5.textContent = data.films[14].title
        document.getElementById('img2').appendChild(fifteenImg)
        document.getElementById('img2').appendChild(fifteenh5)
    })
})