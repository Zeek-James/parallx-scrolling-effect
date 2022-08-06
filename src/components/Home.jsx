import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxImg } from "./ParallaxImg";

export const Home = () => {
  return (
    <ParallaxProvider>
      <ParallaxImg
        imgsrc="https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&w=400"
        height="500px"
        opacity=".1"
        speed={-30}
      >
        <p style={{ position: "absolute" }}>Zeek</p>
      </ParallaxImg>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
        inventore at perferendis veniam illo, beatae architecto laudantium
        explicabo maiores esse velit, voluptate maxime cupiditate fugit nemo!
        Unde, ad vero aliquid officia voluptatum architecto iusto? Molestiae
        laborum neque quae itaque atque nisi et labore voluptatem nobis
        suscipit, perferendis modi quo, excepturi beatae porro dolorum dolores
        consequuntur, sed facilis blanditiis. Qui molestiae mollitia cumque,
        quisquam architecto, dolores cupiditate est aperiam omnis quia in,
        dignissimos perspiciatis officiis perferendis. A dolorem quis ratione
        eveniet illum ipsam saepe nemo inventore voluptas est, impedit omnis
        soluta autem ut eum tenetur ea dolores cumque beatae molestiae dolorum.
      </p>
      <ParallaxImg
        imgsrc="https://images.pexels.com/photos/11025646/pexels-photo-11025646.jpeg?auto=compress&cs=tinysrgb&w=400"
        height="500px"
        opacity=".4"
        speed={3}
      >
        <p style={{ position: "absolute" }}>Zeek</p>
      </ParallaxImg>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
        inventore at perferendis veniam illo, beatae architecto laudantium
        explicabo maiores esse velit, voluptate maxime cupiditate fugit nemo!
        Unde, ad vero aliquid officia voluptatum architecto iusto? Molestiae
        laborum neque quae itaque atque nisi et labore voluptatem nobis
        suscipit, perferendis modi quo, excepturi beatae porro dolorum dolores
        consequuntur, sed facilis blanditiis. Qui molestiae mollitia cumque,
        quisquam architecto, dolores cupiditate est aperiam omnis quia in,
        dignissimos perspiciatis officiis perferendis. A dolorem quis ratione
        eveniet illum ipsam saepe nemo inventore voluptas est, impedit omnis
        soluta autem ut eum tenetur ea dolores cumque beatae molestiae dolorum.
      </p>
      <ParallaxImg
        imgsrc2="https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&w=600"
        imgsrc="https://images.pexels.com/photos/1130717/pexels-photo-1130717.jpeg?auto=compress&cs=tinysrgb&w=600"
        height="500px"
        opacity=".4"
        speed={-20}
        speed2={-10}
      >
        <p style={{ position: "absolute" }}>Zeek</p>
      </ParallaxImg>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
        inventore at perferendis veniam illo, beatae architecto laudantium
        explicabo maiores esse velit, voluptate maxime cupiditate fugit nemo!
        Unde, ad vero aliquid officia voluptatum architecto iusto? Molestiae
        laborum neque quae itaque atque nisi et labore voluptatem nobis
        suscipit, perferendis modi quo, excepturi beatae porro dolorum dolores
        consequuntur, sed facilis blanditiis. Qui molestiae mollitia cumque,
        quisquam architecto, dolores cupiditate est aperiam omnis quia in,
        dignissimos perspiciatis officiis perferendis. A dolorem quis ratione
        eveniet illum ipsam saepe nemo inventore voluptas est, impedit omnis
        soluta autem ut eum tenetur ea dolores cumque beatae molestiae dolorum.
      </p>
    </ParallaxProvider>
  );
};
