const inkomen= 2013.56;
const uitgaven = [14.79, 100.90, 18.68, 48.00, 55.44, 37.85, 38.50, 174.98, 673.72, 10.00, 7.10];

const uitgavenFull  = [
 {Ardanta 			:	 14.79},
 {Ziggo				:	100.90},
 {Ardanta 			:	 18.68},
 {Eneco				:	 48.00},
 {GemLeidschendam	:	 55.44},
 {BelRijnlandse	    :	 37.85},
 {Ohra	            :	 38.50},
 {Ohra2				:	174.98},
 {Vidomes			:	673.72},
 {Simple			:     10.00},		
 {KostenING		    :	  7.10},
]
let total =  uitgaven.reduce((uitgaaf, cur) => {
    console.log(uitgaaf, cur)
     return uitgaaf + cur;
     
    }, 0);
    console.log('Total is: ', total, '\n');


    const companies= [
        {name: "Company One", category: "Finance", start: 1981, end: 2004},
        {name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {name: "Company Four", category: "Retail", start: 1989, end: 2010},
        {name: "Company Five", category: "Technology", start: 2009, end: 2014},
        {name: "Company Six", category: "Finance", start: 1987, end: 2010},
        {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
        {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
        {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
      ];

    //   let  retailCompanies = companies.filter(company => {
    //       if(company.category==="Retail"){
    //           return  true;
    //       }

    //   });
    //   console.log(retailCompanies);


//       let eightiesCompanies = companies.filter(company => {

//         if(company.start >= 1980 && company.end < 1990){
//           return  true;
//     }else if(company.start >= 1980 && company.start < 1990 ){
        
//         return true;
//     } 
//   })
//   console.log(eightiesCompanies)

//   let companyNames = [];  
//   companies.map(company => {
//      companyNames.push(company.name);
//   })
//   console.log(companyNames);

//   let companyNames = companies.map(company => {
//     return company.name;
//  })

//  console.log(companyNames);

 let sorted = companies.sort((a, b) =>{
    return ( a.start > b.start ? 1 : -1)
      
});
 console.log(sorted);

 const books = ['beta', 'Lords', 'manual', 'lords',  'Manual', 'alfa', 1984, 'The Hobbbit', 'roming']

 let sortedBooks = books.sort((a, b) =>( a > b ? 1 : -1));
 console.log(sortedBooks);