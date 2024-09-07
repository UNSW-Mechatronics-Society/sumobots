# Importing Image class from PIL module 
from PIL import Image 
import glob

def resize_and_crop(image:Image.Image, target_size:tuple[int, int]):
    width, height = image.size

    target_width, target_height = target_size[0], target_size[1]
    target_aspect = target_width / target_height

    rescale_ratio = max(target_width / width, target_height / height)
    im = image.resize((int(width * rescale_ratio), int(height * rescale_ratio)))
    width_resized, height_resized = im.size

    left = 0
    right = target_width
    upper = 0
    lower = target_height
    
    if target_aspect > (width_resized / height_resized):
        upper = int(height_resized / 2 - target_height / 2)
        lower = int(height_resized / 2 + target_height / 2)
    else:
        left = int(width_resized / 2 - target_width / 2)
        right = int(width_resized / 2 + target_width / 2)
    im = im.crop((left, upper, right, lower))
    return im


for path in glob.glob('.\images\participants\**\*', recursive=True):
    im = Image.open(path)
    im = resize_and_crop(im, (256, 256))
    file_name = path.split('\\')[-1]
    im.save(f'.\\optimised\\participants\\fullsize\\{file_name}')
    blur = im.copy()
    blur.thumbnail((8, 8))
    blur.save(f'.\\optimised\\participants\\blur\\{file_name}')

winners = ['Skibidi Rizzlers', 'Diabetos', 'Bot McQueen', 'Freaky Guers', 'Big Chonkers', 'INNOVATION X', 'Outvincible']

for file_name in winners:
    im = Image.open(f'.\images\participants\{file_name}.png')
    im = resize_and_crop(im, (470, 320))
    im.save(f'.\\optimised\\participants\\fullsize\\winner_{file_name}.png')
    blur = im.copy()
    blur.thumbnail((12, 8))
    blur.save(f'.\\optimised\\participants\\blur\\winner_{file_name}.png')