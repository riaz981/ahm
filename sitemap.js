
function findMyLocationHome(){
    if(window.location.hostname.match("sales-staging.ahm.ninja") && (/^\/$/).test(window.location.pathname)){
      
      return true;
    }
    else{
      
      return false;
    }
}
function findMyLocationOthers(){
    if(window.location.hostname.match("members-staging.ahm.ninja") && (/^\/$/).test(window.location.pathname)){
      
      return true;
    }
    else{
      
      return false;
    }
}

function getDataLayerId(){
    let productId = window.dataLayer[3].location.split("/")[1].trim();
    if(productId){
        return productId;
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
            ],
            contentZones:[
                {
                    name: "global_chatbot", 
                    selector: ".styles__image___1EftK"
                }
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
                isMatch: () => findMyLocationHome(),
                interaction: {name: "View Homepage"},
                contentZones:[
                    {name: "home_hero", selector:"#main .styles__wrapper___3roa7 .styles__boxed___1wvhc:nth-of-type(1)"}
                ]
            },
            {
                // https://members-staging.ahm.ninja/
                name: "health_login",
                isMatch: () => findMyLocationOthers(),
                interaction: {name: "View Health Login"},
                listeners:[
                    SalesforceInteractions.listener("click", "form button", () => {
                        const customerId = SalesforceInteractions.cashDom("#username").val();
                        console.log("CustomerId "+customerId);
                        if(customerId){
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "Health insurance login - customerid"
                                },
                                user:{
                                    identities: {
                                        customerId: customerId
                                    }
                                }
                            });
                        }
                    })
                ]
            },
            {
                // https://members-staging.ahm.ninja/register
                name: "health_register",
                isMatch: () => (/\/register/).test(window.location.pathname),
                interaction: {name: "View Health Register"},
                listeners: [

                    SalesforceInteractions.listener("click", "form button", () => {
                        const customerId = SalesforceInteractions.cashDom("#username").val();
                        console.log("CustomerId "+customerId);
                        if(customerId){
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "Health insurance register - customerid"
                                },
                                user:{
                                    identities: {
                                        customerId: customerId
                                    }
                                }
                            });
                        }
                    })
                ]

            },
            {
                //https://sales-staging.ahm.ninja/home-insurance/login
                name: "home_login",
                isMatch: () => (/\/home-insurance\/login/).test(window.location.pathname),
                interaction: {name: "View Home Login"},
                listeners: [
                    SalesforceInteractions.listener("click", "form button", () => {
                        const emailAddress = SalesforceInteractions.cashDom("#email").val();
                        console.log("Email is " + email);
                        if(emailAddress){
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "Home insurance login - email"
                                },
                                user:{
                                    identities: {
                                        emailAddress: emailAddress
                                    }
                                }
                            });
                        }
                    })
                ]
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
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "NeedsType",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.split("/")[2].toLowerCase())
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/tax
                name: "needs_type",
                isMatch: () => (/\/tax/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "NeedsType",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.replaceAll("/","").toLowerCase())

                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/pregnancy
                name: "needs_type",
                isMatch: () => (/\/pregnancy/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "NeedsType",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.replaceAll("/","").toLowerCase())
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/youth-discount
                name: "needs_type",
                isMatch: () => (/\/youth-discount/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "NeedsType",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.replaceAll("/","").toLowerCase())
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/bare-bones-cover
                name: "needs_type",
                isMatch: () => (/\/health-insurance\/bare-bones-cover/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "NeedsType",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.split("/")[2].toLowerCase())
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/family-cover
                name: "needs_type",
                isMatch: () => (/\/health-insurance\/family-cover/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "NeedsType",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.split("/")[2].toLowerCase())
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-cover/starter-silver
                name: "phi",
                isMatch: () => (/\/starter-silver$/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: getDataLayerId()
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/extras-cover/black-70-extras
                name: "phi",
                isMatch: () => (/\/extras-cover\/black-70-extras/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: getDataLayerId()
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-extras-packages/classic-flexi-silver-plus
                //
                name: "phi",
                isMatch: () => (/\/hospital-extras-packages\/classic-flexi-silver-plus/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: getDataLayerId(),
                        relatedCatalogObjects: {
                            Category: ["health-insurance"]
                        }
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-extras-bundle/advanced-hospital-gold-super-extras
                name: "phi",
                isMatch: () => (/\/hospital-extras-bundle\/advanced-hospital-gold-super-extras/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: getDataLayerId()
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/buy/cover
                name: "quote_cover",
                isMatch: () => (/\/health-insurance\/buy\/cover/).test(window.location.pathname),
                interaction: {name: "View Quote - Cover"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/buy/email
                name: "quote_started",
                isMatch: () => (/\/health-insurance\/buy\/email/).test(window.location.pathname),
                interaction: {name: "View Quote - Started"},
                listeners:[
                    SalesforceInteractions.listener("click", "form button", () => {
                        const emailAddress = SalesforceInteractions.cashDom("#email").val();
                        console.log("Email is " + email);
                        if(emailAddress){
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "Buy Insurance Email"
                                },
                                user:{
                                    identities: {
                                        emailAddress: emailAddress
                                    }
                                }
                            });
                        }
                    })
                ]
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/buy/about
                //document.querySelector("form .gJGtch section .styles__isFullWidthMobile___m6K7v .styles__well___34AQ4:nth-child(3) section button[type=submit]");

                name: "quote_about",
                isMatch: () => (/\/health-insurance\/buy\/about/).test(window.location.pathname),
                interaction: {name: "View Quote - About"},
                listeners: [
                    SalesforceInteractions.listener("click", "form button[type=submit]", () => {
                        const firstName = String(SalesforceInteractions.cashDom("input#firstName").val().trim());
                        const lastName = String(SalesforceInteractions.cashDom("input#lastName").val().trim());
                        const dob = String(SalesforceInteractions.cashDom("input#dob").val().trim());
                        const mobile = String(SalesforceInteractions.cashDom("input#phoneNumber").val().trim());
                        const emailAddress = String(SalesforceInteractions.cashDom("input#email").val().trim());
                        const residentialAddress = String(SalesforceInteractions.cashDom("input#residentialAddress").val().trim());
                        if(firstName && lastName && dob && mobile && emailAddress && residentialAddress){
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "About you - details"
                                },
                                user: {
                                    identities: {
                                        firstName: firstName,
                                        lastName: lastName,
                                        birthDate: dob,
                                        mobile: mobile,
                                        emailAddress: emailAddress,
                                        residentialAddress: residentialAddress
                                    }
                                }
                            })
                        }
                    })
                ]
            }
            ,
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
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Category",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.replaceAll("/","").toLowerCase())
                    }
                }
            }
            ,
            {
                //https://sales-staging.ahm.ninja/travel-insurance
                name: "category",
                isMatch: () => (/\/travel-insurance$/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Category",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.replaceAll("/","").toLowerCase())
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/car-insurance
                name: "category",
                isMatch: () => (/\/car-insurance$/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Category",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.replaceAll("/","").toLowerCase())
                    }
                }
            }
            ,
            {
                //https://sales-staging.ahm.ninja/home-insurance
                name: "category",
                isMatch: () => (/\/home-insurance$/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Category",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.replaceAll("/","").toLowerCase())
                    }
                }
            }
            ,
            {
                //https://sales-staging.ahm.ninja/life-insurance
                name: "category",
                isMatch: () => (/\/life-insurance$/).test(window.location.pathname),
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Category",
                        id: SalesforceInteractions.resolvers.fromWindow("location.pathname", (path) => path.replaceAll("/","").toLowerCase())
                    }
                }
            },
            {
                //https://sales-staging.ahm.ninja/car-insurance/login
                name: "car_login",
                isMatch: () => (/\/car-insurance\/login/).test(window.location.pathname),
                interaction: {name: "View Car Login"},
                listeners: [
                    SalesforceInteractions.listener("click", "form button", () => {
                        const emailAddress = SalesforceInteractions.cashDom("#email").val();
                        console.log("Email is " + email);
                        if(emailAddress){
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "Car insurance login - email"
                                },
                                user:{
                                    identities: {
                                        emailAddress: emailAddress
                                    }
                                }
                            });
                        }
                    })


                ]
            },
            {
                //https://sales-staging.ahm.ninja/contact-us
                name: "contact_us",
                isMatch: () => (/\/contact-us/).test(window.location.pathname),
                interaction: {name: "View Contact Us"}
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