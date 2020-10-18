import { Component, OnInit } from '@angular/core';
declare const area_sq: () => void;
declare const peri_sq: () => void;
declare const dia_sq: () => void;
declare const area_rec: () => void;
declare const peri_rec: () => void;
declare const dia_rec: () => void;
declare const area_tri: () => void;
declare const peri_tri: () => void;
declare const area_cir: () => void;
declare const circum_cir: () => void;
declare const area_sp: () => void;
declare const vol_sp: () => void;
declare const area_cube: () => void;
declare const vol_cube: () => void;
declare const dia_cube: () => void;
declare const sufarea_cy: () => void;
declare const basearea_cy: () => void;
declare const latarea_cy: () => void;
declare const vol_cy: () => void;
declare const sufarea_cone: () => void;
declare const latarea_cone: () => void;
declare const basearea_cone: () => void;
declare const vol_cone: () => void;
declare const area_par: () => void;
declare const peri_par: () => void;
declare const area_rhom: () => void;
declare const peri_rhom: () => void;

@Component({
  selector: 'app-thrid',
  templateUrl: './thrid.component.html',
  styleUrls: ['./thrid.component.css']
})
export class ThridComponent implements OnInit {

  constructor() { }
  pr()
  {
    area_sq();
  }
  pr1()
  {
    peri_sq();
  }
  pr2()
  {
    dia_sq();
  }
  pr_r()
  {
    area_rec();
  }
  pr_r2()
  {
    peri_rec();
  }
  pr_r3()
  {
    dia_rec();
  }
  
  pr_tri1()
  {
    area_tri();
  }
  pr_tri2()
  {
    peri_tri();
  }
  ar_cir()
  {
    area_cir();
  }
  cum_cir()
  {
    circum_cir();
  }
  ar_sp()
  {
    area_sp();
  }
 pr_sp()
 {
   vol_sp();
 } 
pr_cub()
{
  area_cube();
}
pr_cube()
{
  vol_cube();
}
pr_dia()
{
  dia_cube();
}
suf_cy()
{
  sufarea_cy();
}
base_cy()
{
  basearea_cy();
} 
lat_cy()
{
  latarea_cy();
}
prs_volcy()
{
  vol_cy();
}  
suf_cone()
{
  sufarea_cone();
}
lat_cone()
{
  latarea_cone();
}
base_cone()
{
  basearea_cone();
}
prvol_cone()
{
  vol_cone();
}
pr_par()
{
  area_par();
}  
pr1_par()
{
  peri_par();
}
pr_rhom1()
{
  area_rhom();
}
pr_rhom2()
{
  peri_rhom();
}

  
  ngOnInit(): void {
  }
}

