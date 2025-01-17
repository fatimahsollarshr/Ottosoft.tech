import sys
import cv2
import base64

def process_image(image_path):
    # Load the image
    image = cv2.imread(image_path)

    # Mock processing: Draw a rectangle (replace with NVIDIA VPI/DeepStream processing)
    height, width, _ = image.shape
    cv2.rectangle(image, (50, 50), (width - 50, height - 50), (0, 255, 0), 3)

    # Encode the processed image to Base64
    _, buffer = cv2.imencode('.jpg', image)
    encoded_image = base64.b64encode(buffer).decode('utf-8')
    print(encoded_image)

if __name__ == "__main__":
    image_path = sys.argv[1]
    process_image(image_path)