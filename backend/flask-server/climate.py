from flask import Flask, jsonify
from newspaper import Article
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

# Enable CORS for the entire app
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

app.after_request(add_cors_headers)

@app.route('/')
def get_news():
    url = "https://www.lemonde.fr/en/climate-change/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    articles = soup.find_all('a', class_='teaser__link')

    # Create a list to store the top 10 articles
    top_articles = []

    # Extract the top 10 articles
    for article in articles[:5]:
        link = article['href']
        article_data = Article(link)
        article_data.download()
        article_data.parse()

        header = article_data.title
        meta_description = article_data.meta_description
        top_image = article_data.top_image

        # Create a dictionary for each article
        article_info = {
            'header': header,
            'summary': meta_description,
            'link': link,
            'top_image': top_image
        }
        top_articles.append(article_info)

    # Return the data in JSON format
    return jsonify(top_articles)

if __name__ == '__main__':
    app.run(debug=True)





