
# TODO
// DONE-1: unit test  
// DONE-2: property use  
// DONE-3: property type  
// DONE-4: saving  
// DONE-5: first home buyer  
// TODO-6: test ACT  
// DONE-7: test NSW  
// TODO-8: test NT  
// TODO-9: test QLD  
// TODO-10: test SA  
// TODO-11: test TAS  
// TODO-12: test VIC  
// TODO-13: test WA  

# Done
- add primary/investment/land for Victoria
- add first home buyer for Victoria

# Reference
- https://www.domain.com.au/home-loans/calculators/
- https://www.domain.com.au/home-loans/calculators/stamp-duty-calculator/
- https://www.commbank.com.au/digital/home-buying/calculator/stamp-duty-calculator?ei=calculator-inter-calc-tab-totalcost
- https://exactly.loans/calculate-act-stamp-duty/
- https://www.lendi.com.au/home-loans/stamp-duty-act/
- Official links for all states
- https://baike.juwai.com/291444

## ACT
- https://www.revenue.act.gov.au/duties/conveyance-duty?result_1060955_result_page=2
- 
## Victoria Primary
- https://www.sro.vic.gov.au/principal-place-residence-current-rates

## Victoria Investment & Land
- https://www.sro.vic.gov.au/non-principal-place-residence-dutiable-property-current-rates

## Victoria First Home Buyer
- https://www.sro.vic.gov.au/fhbduty

## REST
- curl 'https://home-loans-api.domainloanfinder.com.au/v1/calculators/stamp-duty?state=ACT&propertyUse=OwnerOccupied&propertyCategory=NewHome&propertyValue=480000&firstHomeBuyer=true' \
  -H 'authority: home-loans-api.domainloanfinder.com.au' \
  -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'content-type: application/json' \
  -H 'accept: */*' \
  -H 'origin: https://www.domain.com.au' \
  -H 'sec-fetch-site: cross-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://www.domain.com.au/' \
  -H 'accept-language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5,fr;q=0.4,pt;q=0.3,mt;q=0.2,hu;q=0.1,vi;q=0.1,lb;q=0.1' \
  -H 'if-none-match: W/"4d-OPsN4ys5NCWbLJAxfFJr/02sjsU"' \
  --compressed
- {"stampDuty":1235,"transferFee":409,"registrationFee":153,"grantAmount":7000}
- curl 'https://stamp-duty-api.homeloanexperts.com.au/calculate' \
  -H 'authority: stamp-duty-api.homeloanexperts.com.au' \
  -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'content-type: application/json' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'origin: https://www.homeloanexperts.com.au' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://www.homeloanexperts.com.au/' \
  -H 'accept-language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,ja;q=0.5,fr;q=0.4,pt;q=0.3,mt;q=0.2,hu;q=0.1,vi;q=0.1,lb;q=0.1' \
  --data-raw '{"state":"ACT","property_value":470000,"property_type":"INVESTMENT","property_status":"ESTABLISHED_HOME","first_home_buyer":true,"total_income":80000,"eligible_pensioner":false,"no_of_dependent":0}' \
  --compressed
- {"message":"success","data":{"stampDutyAmount":10380,"transferFee":416,"registrationFee":155}}

# Abandon
- https://conveyancing.com.au/articles/stamp-duty

