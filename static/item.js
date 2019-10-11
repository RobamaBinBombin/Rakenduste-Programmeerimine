const x = window.location;
      console.log(x);
      const urlParams = new URLSearchParams(window.location.search);
      const title = urlParams.get("title");
      const cost = urlParams.get("cost");
      const src = urlParams.get("src");
      console.log(title, cost, src);
      //alert('Title: ${title} cost: ${cost} path: ${src}');

      const container = document.createElement("div");
      container.className = "itemContainer";

      const image = document.createElement(tagName, "img");
      image.src = src;
      image.className = "item_image";

      console.log("image", image);
      
      container.append(image);

      window.addEventListener("load", () =>{
        const app = document.getElementById("item-body");
        app.append(container);
      });