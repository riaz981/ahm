function findMyLocationHome(myUrl){
    let url = myUrl.split('/');
    if(url[2] === "sales-staging.ahm.ninja" && (/^\/$/).test(window.location.pathname)){
      
      return true;
    }
    else{
      
      return false;
    }
}
function findMyLocationOthers(myUrl){
    let url = myUrl.split('/');
    if(url[2] === "members-staging.ahm.ninja" && (/^\/$/).test(window.location.pathname)){
      
      return true;
    }
    else{
      
      return false;
    }
}

SalesforceInteractions.init({
    cookieDomain: "ahm.ninja"
}).then(() => {
    const sitemapConfig = {
        global: {
            
            onActionEvent: (actionEvent) => {

                // Add a log to the browser console
                console.log("MCP: ", actionEvent);
                return actionEvent;

            },
            listeners: [

            ]
        },
        pageTypeDefault: {
            name: "default",
            interaction: { name: "Default Page" }
        },

        pageTypes: [
            {
                // https://sales-staging.ahm.ninja/
                name: "home",
                isMatch: () => findMyLocationHome(window.location.href),
                interaction: {name: "View Homepage"}
            },
            {
                // https://members-staging.ahm.ninja/
                name: "health_login",
                isMatch: () => findMyLocationOthers(window.location.href),
                interaction: {name: "View Health Login"}
            },
            {
                //https://sales-staging.ahm.ninja/perks/specsavers
                name: "specsavers",
                isMatch: () => (/\/perks\/specsavers/).test(window.location.pathname),
                interaction: {name: "View Specsavers"}
            },
            {
                //https://sales-staging.ahm.ninja/perks/goodlife
                name: "goodlife",
                isMatch: () => (/\/perks\/goodlife/).test(window.location.pathname),
                interaction: {name: "View Goodlife Gyms"}
            },
            {
                //https://sales-staging.ahm.ninja/perks
                name: "perks",
                isMatch: () => (/^\/perks$/).test(window.location.pathname),
                interaction: {name: "View perks"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/no-gap-dental-check-ups
                name: "needs_type",
                isMatch: () => (/\/health-insurance\/no-gap-dental-check-ups/).test(window.location.pathname),
                interaction: {name: "View Item No Gap Dental"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/no-gap-dental-check-ups
                name: "needs_type",
                isMatch: () => (/\/tax/).test(window.location.pathname),
                interaction: {name: "View Item Tax and Hospital"}
            },
            {
                //https://sales-staging.ahm.ninja/pregnancy
                name: "needs_type",
                isMatch: () => (/\/pregnancy/).test(window.location.pathname),
                interaction: {name: "View Item Pregnancy"}
            },
            {
                //https://sales-staging.ahm.ninja/youth-discount
                name: "needs_type",
                isMatch: () => (/\/youth-discount/).test(window.location.pathname),
                interaction: {name: "View Item Youth Discount"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/bare-bones-cover
                name: "needs_type",
                isMatch: () => (/\/health-insurance\/bare-bones-cover/).test(window.location.pathname),
                interaction: {name: "View Item Bare Bones"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/family-cover
                name: "needs_type",
                isMatch: () => (/\/health-insurance\/family-cover/).test(window.location.pathname),
                interaction: {name: "View Item Family"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-cover/starter-silver
                name: "phi",
                isMatch: () => (/\/starter-silver$/).test(window.location.pathname),
                interaction: {name: "View Item Hospital"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/extras-cover/black-70-extras
                name: "phi",
                isMatch: () => (/\/extras-cover\/black-70-extras/).test(window.location.pathname),
                interaction: {name: "View Item Extras"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-extras-packages/classic-flexi-silver-plus
                name: "phi",
                isMatch: () => (/\/hospital-extras-packages\/classic-flexi-silver-plus/).test(window.location.pathname),
                interaction: {name: "View Item Package"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-extras-bundle/advanced-hospital-gold-super-extras
                name: "phi",
                isMatch: () => (/\/hospital-extras-bundle\/advanced-hospital-gold-super-extras/).test(window.location.pathname),
                interaction: {name: "View Item Combined"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/buy/cover
                name: "quote_cover",
                isMatch: () => (/\/health-insurance\/buy\/cover/).test(window.location.pathname),
                interaction: {name: "View Quote - Cover"}
            },
            {
                //https://help.ahm.com.au/
                name: "help",
                isMatch: () => (/help.ahm.com.au/).test(window.location.href),
                interaction: {name: "View Help"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance
                name: "category",
                isMatch: () => (/\/health-insurance$/).test(window.location.pathname),
                interaction: {name: "View Health Insurance"}
            }
            ,
            {
                //https://sales-staging.ahm.ninja/travel-insurance
                name: "category",
                isMatch: () => (/\/travel-insurance$/).test(window.location.pathname),
                interaction: {name: "View Travel Insurance"}
            },
            {
                //https://sales-staging.ahm.ninja/car-insurance
                name: "category",
                isMatch: () => (/\/car-insurance$/).test(window.location.pathname),
                interaction: {name: "View Car Insurance"}
            }
            ,
            {
                //https://sales-staging.ahm.ninja/home-insurance
                name: "category",
                isMatch: () => (/\/home-insurance$/).test(window.location.pathname),
                interaction: {name: "View Home Insurance"}
            }
            ,
            {
                //https://sales-staging.ahm.ninja/life-insurance
                name: "category",
                isMatch: () => (/\/life-insurance$/).test(window.location.pathname),
                interaction: {name: "View Life Insurance"}
            }
            
        ] 
    };

    SalesforceInteractions.initSitemap(sitemapConfig);
     // Listener to log all clicks for debugging and troubleshooting
    //test
    document.addEventListener("click", (e) => {
        console.log("CLICK: " + SalesforceInteractions.cashDom(e.target).text().toUpperCase());
    });
});