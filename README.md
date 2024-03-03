# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
