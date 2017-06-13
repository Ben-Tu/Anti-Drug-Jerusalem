import { Component, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { MobileHeaderComponent } from "../mobile-header/mobile-header.component";
import { MobileFooterComponent } from "../mobile-footer/mobile-footer.component";
import { Location } from "../../../models/Location";
import { UserService } from "../../../service/user/user.service";
import { ShiftService } from "../../../service/shift/shift.service";
import { FirebaseService } from "../../../service/firebase/firebase.service";
import { LocalStorageService } from "../../../service/local-storage/local-storage.service";
import { SaveLocationBetaComponent } from "../save-location-beta/save-location-beta.component";

@Component({
  selector: "app-mobile-spot",
  templateUrl: "./mobile-spot.component.html",
  styleUrls: ["./mobile-spot.component.css"]
})
export class MobileSpotComponent implements OnInit {
  public location: Location;

  constructor(public router: Router,
              private element: ElementRef,
              public userService: UserService,
              public firebaseService: FirebaseService,
               public shiftService: ShiftService) {

  }


  public buttonColdSpot() {
   navigator.geolocation.getCurrentPosition((position) => {
   this.location = new Location(position.coords.longitude, position.coords.latitude);
   this.firebaseService.saveColdSpot(this.location);
   this.router.navigate(["mobile_main"]);
    }, (error) => {
      alert("אנא הפעל מיקום");
    });
   /* this.userService.user.updateLastShift(this.shiftService.shift);
    this.firebaseService.updateUser(this.userService.user);
    LocalStorageService.saveUser(this.userService.user);*/

  }



  ngOnInit() {
  }

}
