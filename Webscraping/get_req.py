import requests
from bs4 import BeautifulSoup
URL = "https://bigfuture.collegeboard.org/scholarships"

def web_scraper(url):
    college_response = requests.get(url)
    if college_response.status_code != 200:
        return f'status failed with {college_response.status_code}'
    #Returns error code if request is not succesful
    else:
        soup = BeautifulSoup(college_response.text, 'html.parser')
        #soup.to_csv()
        #text = BeautifulSoup(college_response.text)
        #print(soup.get_text(separator='\n'))
        #scholarships = soup.find_all
    
        url_tag = soup.script
        print(url_tag['src'])
        
        

web_scraper(URL)