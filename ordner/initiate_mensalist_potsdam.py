import requests

url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=52.3906%2C13.0645&radius=11000&keyword=mensa&key=AIzaSyDuLB1WqmL50sgYUS1wsfc2bBUlf0C_ffs"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)
print(response.text)
