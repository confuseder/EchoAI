from create import create_dataset
from upload import upload_file
import json, os
if __name__ == "__main__":
    operation = input("What do you want to do? (1. create, 2. upload): ")
    if operation == "1":
        name = input("Enter the name of the dataset: ")
        description = input("Enter the description of the dataset: ")
        create_dataset(name, description)
    elif operation == "2":
        with open("infos.json", 'r') as f:
            data = json.load(f)
            for index, dataset in enumerate(data["datasets"]):
                print(f"{index + 1}: {dataset['name']}")
        dataset_index = int(input("Enter the index of the dataset: "))
        md_list = os.listdir("output/documents")
        for index, md in enumerate(md_list):
            print(f"{index + 1}: {md}")
        md_index = input("Enter the index of the md file (use `,` to separate): ")
        md_index = md_index.split(",")
        for md in md_index:
          upload_file("output/documents/" + md_list[int(md) - 1], data["datasets"][dataset_index - 1]["id"])
