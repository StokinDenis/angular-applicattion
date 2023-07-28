import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {SlideComponent} from "./slide/slide.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, SlideComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 4,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 100,
  };

  slides: string[]=[
    '../../../assets/slide1.jpg',
    '../../../assets/slide2.jpg',
    '../../../assets/slide3.jpg',
    '../../../assets/slide4.jpg'
  ]

}
