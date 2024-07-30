import requests
from bs4 import BeautifulSoup
from tqdm import tqdm
import time
import random

class LinkedInScrapper:
    def __init__(self):
        self._retry_interval = [0.1,0.2,0.5,1,2,5,10]
        self._headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

    def __call__(self, job_title, location, number_to_fetch):
        page_results = [] 
        for i in tqdm(range(1,number_to_fetch), desc="PAGE"):
            for i in self._retry_interval:
                req = f'https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/{job_title}-jobs?original_referer=https%3A%2F%2Fwww.google.com%2F&location={location}&start={i}'

                response = requests.get(req)

                if response.status_code != 200:
                    continue
                else:
                    break
            if response.status_code != 200:
                continue
            soup = BeautifulSoup(response.text, 'html.parser')
            lists = soup.select('li')
            for li in tqdm(lists,desc="JOB"):
                div = li.select_one("div.base-card")
                id = div['data-entity-urn'].split(":")[-1]
                a = li.select("a")[0]
                title = a.text.strip()
                link = a['href']
                subtitle = li.select_one(".base-search-card__subtitle").text.strip()
                meta = li.select_one(".base-search-card__metadata")
                location = meta.select_one("span").text.strip()
                date = meta.select_one("time").text.strip()
                for delay in self._retry_interval:
                    r2 = requests.get(f"https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/{id}",headers=self._headers)
                    if r2.status_code != 200:
                        continue
                    else:
                        break
                if r2.status_code != 200:
                    continue
                soup2 = BeautifulSoup(r2.text, 'html.parser')
                info = soup2.select_one(".show-more-less-html__markup").get_text(separator="\n", strip=True)
                result = {
                    "title" : title,
                    "link" : link,
                    "location" : location,
                    "info" : info,
                    "date" : date
                }
                page_results.append(result)
            time.sleep(random.uniform(1, 5))

        return page_results
        



