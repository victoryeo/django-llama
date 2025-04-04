# Django Llama

This is a Django application designed to demonstrate the integration of LangChain with Django for building a simple Retrieval-Augmented Generation (RAG) chatbot. This chatbot is capable of answering questions based on the content scraped from a website.

## Overview

The core of this app lies in its ability to:
- Scrape web content from the AWS documentation site.
- Process and index this content into a searchable database using LangChain and Chroma.
- Use Llama2 CPP to answer queries with info extracted from indexed content
- Use open source Llama2 model

## Instruction
To run the chatbot
$ python manage.py runserver

## Frontend
The frontend is built using NextJS. It is in nextjs-chatbot.