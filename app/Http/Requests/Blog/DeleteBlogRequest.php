<?php

namespace App\Http\Requests\Blog;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

/**
 *
 * Handles the validation of requests when deleting a blog.
 */
class DeleteBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $blog = $this->route('blog');

        return $blog && Gate::allows('delete', $blog);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [];
    }
}
