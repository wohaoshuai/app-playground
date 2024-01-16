// pages/comfyUiGuide.tsx
import { ExternalLink } from '#/ui/external-link';

export default function ComfyUiGuide() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">
        Unleashing Creativity with ComfyUI: A Beginner&apos;s Guide
      </h1>

      <section>
        <h2>What is ComfyUI?</h2>
        <p>
          &ldquo;ComfyUI&rdquo; is a user-friendly software framework that
          empowers you to create complex Stable Diffusion workflows through a
          graph-based interface. Imagine designing and executing sophisticated
          pipelines using a flowchart-style interface without the need for
          coding skills.
        </p>
      </section>

      <section>
        <h2>Why Use ComfyUI?</h2>
        <ul>
          <li>
            <strong>No Coding Required:</strong> &ldquo;ComfyUI&rdquo;
            eliminates the need for coding by providing a visual interface with
            nodes and graphs. Design advanced workflows without writing a single
            line of code.
          </li>
          <li>
            <strong>Stable Diffusion Support:</strong> Fully supports various
            Stable Diffusion versions, including SD1.x, SD2.x, SDXL, and Stable
            Video Diffusion. It opens up possibilities for image processing,
            inpainting, upscaling, and much more.
          </li>
          <li>
            <strong>Versatility:</strong> From model merging to area
            composition, embeddings, and textual inversion,
            &ldquo;ComfyUI&rdquo; supports a wide range of features and tasks,
            making it a versatile tool for different creative projects.
          </li>
          <li>
            <strong>Optimizations:</strong> Optimizes workflow execution by
            re-executing only the parts that change, saving time and resources.
            It also provides an asynchronous queue system for efficient
            processing.
          </li>
        </ul>
      </section>

      <section>
        <h2>How to Install ComfyUI</h2>

        <h3>Windows:</h3>
        <ul>
          <li>
            Download the portable standalone build for Windows from the releases
            page.
          </li>
          <li>
            Extract the downloaded file using 7-Zip and run the application.
          </li>
          <li>
            Place your Stable Diffusion checkpoints/models in the
            "ComfyUI\models\checkpoints" directory.
          </li>
        </ul>

        <h3>Jupyter Notebook or Manual Install (Windows, Linux):</h3>
        <ul>
          <li>Clone the "ComfyUI" repository from GitHub.</li>
          <li>
            Organize your SD checkpoints and VAE models in the specified
            directories.
          </li>
          <li>
            Install dependencies by running "pip install -r requirements.txt" in
            the ComfyUI folder.
          </li>
          <li>You're ready to start experimenting with "ComfyUI."</li>
        </ul>

        <h3>Other Platforms (AMD, Intel, Apple):</h3>
        <ul>
          <li>
            Follow platform-specific instructions provided in the documentation.
          </li>
          <li>
            Ensure to add models, VAEs, and LoRAs to the corresponding "ComfyUI"
            folders.
          </li>
        </ul>
      </section>

      <section>
        <h2>Shortcuts for Quick Navigation:</h2>
        <ul>
          <li>Ctrl + Enter: Queue up the current graph for generation.</li>
          <li>Ctrl + S: Save your workflow.</li>
          <li>Ctrl + Z: Undo changes.</li>
          <li>Ctrl + D: Load default graph.</li>
        </ul>
      </section>

      <div className="flex gap-2">
        <ExternalLink href="https://blenderneko.github.io/ComfyUI-docs/">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/comfyanonymous/ComfyUI?tab=readme-ov-file#installing">
          Github
        </ExternalLink>
      </div>
    </div>
  );
}
