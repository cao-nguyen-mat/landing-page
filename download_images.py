import os
import requests

# The base URL of the domain
BASE_URL = "https://caonguyenmat-gvuvyyve.manus.space"

# The dictionary of images mapped from your JS object
IMAGES = {
    "heroHighlandMorning": "/manus-storage/hero-highland-morning_188b6600.png",
    "coffeeBlossomClose": "/manus-storage/coffee-blossom-close_d39de93d.png",
    "beeOnBlossom": "/manus-storage/bee-on-blossom_ff11c07a.png",
    "beekeeperHands": "/manus-storage/beekeeper-hands_670b68d8.png",
    "honeyPour": "/manus-storage/honey-pour_4662ed7a.png",
    "harvestFrame": "/manus-storage/harvest-frame_2421b0f7.png",
    "daklakLandscape": "/manus-storage/daklak-landscape_6e691f33.png",
    "honeyBottle": "/manus-storage/honey-bottle_7d3e40d2.png",
    "tastingMoment": "/manus-storage/tasting-moment_5c4f9c85.png",
    "logo": "/manus-storage/can-logo_91dad4a3.png",
}

# Directory where the images will be saved
DOWNLOAD_DIR = "downloaded_images"

def download_images():
    # Create the directory if it doesn't exist
    if not os.path.exists(DOWNLOAD_DIR):
        os.makedirs(DOWNLOAD_DIR)
        print(f"Created directory: {DOWNLOAD_DIR}")

    for name, path in IMAGES.items():
        # Construct the full URL
        full_url = BASE_URL + path
        
        # Extract the filename from the path
        filename = path.split("/")[-1]
        filepath = os.path.join(DOWNLOAD_DIR, filename)
        
        print(f"Downloading {name} from {full_url}...")
        
        try:
            # Send a GET request to the URL
            response = requests.get(full_url, stream=True)
            
            # Check if the request was successful
            response.raise_for_status()
            
            # Write the content to a file
            with open(filepath, 'wb') as file:
                for chunk in response.iter_content(chunk_size=8192):
                    file.write(chunk)
            print(f"✅ Successfully saved: {filepath}\n")
            
        except requests.exceptions.RequestException as e:
            print(f"❌ Failed to download {name}. Error: {e}\n")

if __name__ == "__main__":
    download_images()
