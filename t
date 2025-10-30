For Large Language Models (LLMs), engines can be generated and benchmarked using TensorRT-LLM (TRT-LLM). However, TRT-LLM currently does not support execution on the Jetson Orin platform for the Qwen3 model, and even the supported versions of TRT-LLM require Hopper or newer GPU architectures.

In addition, for LLMs, the newer TensorRT execution engines have deprecated several APIs, as most functionalities have been migrated to TRT-LLM. Consequently, running inference using older TensorRT execution engines (e.g., version 8.6.1) has become complex, particularly when KV cache is enabled, resulting in output mismatches during inference.

Given these limitations, VLLM has been identified as the most viable tool for benchmarking these models. However, it should be noted that VLLM does not utilize DLA cores and instead relies entirely on the GPU for inference. Therefore, we have planned to perform benchmarking of these models using VLLM.
