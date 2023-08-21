export default class Case{
    id=-1
    event_id="DEFAULT_ID"
    occ_date="DEFAULT_DATE"
    occ_year=-1
    occ_month="DEFAULT_MONTH"
    occ_dow="DEFAULT_DOW"//day of week
    occ_day=-1
    occ_doy=-1//day of year
    occ_hour=-1
    report_date="DEFAULT_DATE"
    report_year=-1
    report_month="DEFAULT_MONTH"
    report_dow="DEFAULT_DOW"//day of week
    report_day=-1
    report_doy=-1//day of year
    report_hour=-1 
    division="DEFAULT_DIV"//police stat div
    location_type="DEFAULT_LOCATION"
    premises_type="DEFAULT_PREMISES"
    bike_make="DEFAULT_MAKE"
    bike_model="DEFAULT_MODEL"
    bike_type="DEFAULT_TYPE"
    bike_speed=-1
    bike_colour="DEFAULT_COLOUR"
    bike_cost=-1
    bike_status="DEFAULT_STATUS"
    geo= {latitude:1.1,longitude:2.2}

    constructor(id,event_id,
                occ_date,occ_year,occ_month,occ_dow,occ_day,occ_doy,occ_hour,
                report_date,report_year,report_month,report_dow,report_day,report_doy,report_hour,
                division,location_type,premises_type,bike_make,bike_model,bike_type,bike_speed,bike_colour,bike_cost,bike_status,geo){
                    this.id=id
                    this.event_id=event_id
                    this.occ_date=occ_date
                    this.occ_year=occ_year
                    this.occ_month=occ_month
                    this.occ_dow=occ_dow
                    this.occ_day=occ_day
                    this.occ_doy=occ_doy
                    this.occ_hour=occ_hour
                    this.report_date=report_date
                    this.report_year=report_year
                    this.report_month=report_month
                    this.report_dow=report_dow
                    this.report_day=report_day
                    this.report_doy=report_doy
                    this.report_hour=report_hour
                    this.division=division
                    this.location_type=location_type
                    this.premises_type=premises_type
                    this.bike_make=bike_make
                    this.bike_model=bike_model
                    this.bike_type=bike_type
                    this.bike_speed=bike_speed
                    this.bike_colour=bike_colour
                    this.bike_cost=bike_cost
                    this.bike_status=bike_status
                    this.geo_translate(geo)

                }

             geo_translate=(geo)=>{
                if(geo.latitude===undefined){
                    var temp_geo = JSON.parse(geo).coordinates
                    this.geo = {latitude:temp_geo[1],longitude:temp_geo[0]}
                }
                    else{
                        this.geo=geo
                    }
             }   

}