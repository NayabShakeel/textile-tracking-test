import qrcode
from PIL import Image

def generate_qr_code(data, filename):
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')
    img.save(filename)

if __name__ == "__main__":
    cloths = [
        {"id": "CLOTH001", "process": "DYEING"},
        {"id": "CLOTH002", "process": "WEAVING"}
    ]
    for cloth in cloths:
        data = f"{cloth['id']}:{cloth['process']}"
        generate_qr_code(data, f"{cloth['id']}_qr.png")
        print(f"QR code for {cloth['id']} saved as {cloth['id']}_qr.png")

