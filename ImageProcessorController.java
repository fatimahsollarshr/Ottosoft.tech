import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.Base64;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/process")
public class ImageProcessorController {

    @PostMapping
    public ResponseEntity<?> processImage(@RequestParam("file") MultipartFile file) {
        try {
            // Save the uploaded file
            Path tempDir = Files.createTempDirectory("upload");
            Path filePath = tempDir.resolve(file.getOriginalFilename());
            Files.write(filePath, file.getBytes());

            // Call Python processing script
            ProcessBuilder pb = new ProcessBuilder(
                "python3", "process_image.py", filePath.toString()
            );
            Process process = pb.start();

            // Get the processed image in Base64
            byte[] result = process.getInputStream().readAllBytes();
            String encodedImage = Base64.getEncoder().encodeToString(result);

            // Clean up
            Files.delete(filePath);

            return ResponseEntity.ok().body("{\"image\": \"" + encodedImage + "\"}");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing image.");
        }
    }
}