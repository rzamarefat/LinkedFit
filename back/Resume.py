from langchain_community.llms import OpenAI
from pypdf import PdfReader
import pandas as pd
import re
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

class Resume:
    def __init__(self) -> None:
        pass


    def _get_pdf_text(self, pdf_doc):
        pdf_reader = PdfReader(pdf_doc)
        text = "".join([page.extract_text() for page in pdf_reader.pages])

        return text

    def match_resume(self, job, resume_doc):
        self._get_pdf_text(resume_doc)