import multer from "multer";

import { Client } from 'minio';
import { MinioStorageEngine } from '@namatery/multer-minio';

const minioClient = new Client({
    port: 9000,
    endPoint: 'cadt-file-server',
    accessKey: process.env.MINIO_ROOT_USER,
    secretKey: process.env.MINIO_ROOT_PASSWORD,
    useSSL: false,
});

const options = {
    path: '/',
    region: 'us-east-1',
    bucket: {
        init: true,
        versioning: false,
        forceDelete: false,
    },
    object: {
        name: (req, file) => {
            return `${new Date()}-${file.originalname}`;
        },
        useOriginalFilename: false,
    },
};

const storage = new MinioStorageEngine(minioClient, 'caddt-files', options);

export const upload = multer({
    storage: storage,
}).single('file');

export const uploads = multer({
    storage: storage,
}).array('files', 10);