from LinkedInScrapper import LinkedInScrapper
from Resume import Resume

if __name__ == "__main__":
    ls = LinkedInScrapper()

    job_title = "computer-vision"
    location = "netherlands"
    jobs = ls(job_title, location, 2)
    
    for job in jobs:
        print(job)
        print("====================")


