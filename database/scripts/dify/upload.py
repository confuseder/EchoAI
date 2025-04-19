from infos import DIFY_DATASET_API_KEY, DIFY_URL
import requests, os

def upload_file(filepath, dataset_id):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    filename = os.path.basename(filepath)
    
    url = f"{DIFY_URL}/v1/datasets/{dataset_id}/document/create-by-text"
    headers = {
        "Authorization": f"Bearer {DIFY_DATASET_API_KEY}",
        "Content-Type": "application/json"
    }
    
    data = {
        "name": filename,
        "text": content,
        "indexing_technique": "high_quality",
        "doc_form": "text_model",
        "process_rule": {
            "mode": "custom",
            "rules": {
                "segmentation": {
                    "separator": "\n======\n",
                    "max_tokens": 1000
                },
                "pre_processing_rules":[ {
                  "id": "remove_extra_spaces",
                  "enabled": True
                }]

            }
        }
    }
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()
