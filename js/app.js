document.addEventListener("DOMContentLoaded", function(event) { 
    let body = document.querySelector("body");
        body.classList.add("bg-light");
    
    let div = document.createElement("div");
        div.classList.add("container");

    let row = document.createElement("div");
        row.classList.add("row");

    function checkoutForm(){
        let div = document.createElement("div");

        let img = document.createElement("img");
            div.setAttribute("class", "py-5 text-center");
            img.setAttribute("class", "d-block mx-auto mb-4");
            img.setAttribute("src","https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" );
            img.setAttribute("width","72" );
            img.setAttribute("height","72" );

        let h2 = document.createElement("H2");
            h2.innerText = "Checkout form";
            
        let p = document.createElement("p");
            p.classList.add("lead");
            p.innerText = "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);
        return div
    }

    function first_row(){
        let div = document.createElement("div");
        div.setAttribute("class", "row");

        let div_two = document.createElement("div");
        div_two.setAttribute("class", "col-md-8");

        let h4 = document.createElement("h4")
        h4.setAttribute("class", "mb-3")
        h4.innerHTML = "Billing address"

        div_two.appendChild(h4)

        div.appendChild(div_two)

        let div_three = document.createElement("div");
        div_three.setAttribute("class", "col-md-4");

        let span = document.createElement("span")
        span.setAttribute("class","text-muted")
        span.innerHTML = 'Your cart'

        div_three.appendChild(span)

        div.appendChild(div_three)

        return div
    }

    body.insertBefore(div, body.childNodes[0]);
    div.appendChild(checkoutForm());
    div.appendChild(first_row());
});
