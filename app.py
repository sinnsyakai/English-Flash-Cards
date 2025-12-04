import streamlit as st
import streamlit.components.v1 as components
import os

st.set_page_config(page_title="English Flashcards", layout="wide")

def load_file(filename):
    with open(filename, "r", encoding="utf-8") as f:
        return f.read()

# Load static files
html_content = load_file("index.html")
css_content = load_file("style.css")
js_content = load_file("script.js")

# Inline CSS and JS into HTML
# We remove the external links and inject the content directly
html_content = html_content.replace('<link rel="stylesheet" href="style.css">', f'<style>{css_content}</style>')
html_content = html_content.replace('<script src="script.js"></script>', f'<script>{js_content}</script>')

# Render the HTML component
# height=800 ensures enough space for the app on desktop/mobile
components.html(html_content, height=800, scrolling=True)

# Hide Streamlit's default UI elements to make it look more like a standalone app
hide_streamlit_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            header {visibility: hidden;}
            .block-container {padding-top: 0; padding-bottom: 0; padding-left: 0; padding-right: 0;}
            </style>
            """
st.markdown(hide_streamlit_style, unsafe_allow_html=True)
