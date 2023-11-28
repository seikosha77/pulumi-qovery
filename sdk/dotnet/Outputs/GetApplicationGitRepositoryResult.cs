// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace ediri.Qovery.Outputs
{

    [OutputType]
    public sealed class GetApplicationGitRepositoryResult
    {
        public readonly string Branch;
        public readonly string GitTokenId;
        public readonly string RootPath;
        public readonly string Url;

        [OutputConstructor]
        private GetApplicationGitRepositoryResult(
            string branch,

            string gitTokenId,

            string rootPath,

            string url)
        {
            Branch = branch;
            GitTokenId = gitTokenId;
            RootPath = rootPath;
            Url = url;
        }
    }
}
