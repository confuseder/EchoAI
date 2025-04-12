import json
import requests
from infos import DIFY_URL, DIFY_DATASET_API_KEY

def create_dataset(name: str, description: str):
    url = f"{DIFY_URL}/v1/datasets"
    headers = {
        "Authorization": f"Bearer {DIFY_DATASET_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "name": name,
        "description": description,
    }
    response = requests.post(url, headers=headers, json=data)
    data = response.json()
    
    try:
        with open("infos.json", 'r') as f:
            try:
                original_data = json.load(f)
            except json.JSONDecodeError:
                original_data = {"datasets": []}
    except FileNotFoundError:
        original_data = {"datasets": []}
    
    original_data["datasets"].append(data)
    
    with open("infos.json", 'w') as f:
        json.dump(original_data, f, indent=2)
        
        
